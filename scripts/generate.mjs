import { readFileSync, writeFileSync } from "node:fs";

const [input = "openapi.json", output = "src/index.d.ts"] = process.argv.slice(2);
const spec = JSON.parse(readFileSync(input, "utf8"));

const SCHEMA_REF = "#/components/schemas/";
const VERBS = { get: "Get", post: "Create", put: "Update", patch: "Update", delete: "Delete" };
const HANDLED_KEYWORDS = new Set([
  "additionalProperties",
  "allOf",
  "anyOf",
  "deprecated",
  "description",
  "enum",
  "items",
  "nullable",
  "oneOf",
  "properties",
  "required",
  "type",
]);
// These constrain or describe values without changing their TypeScript type.
const IGNORED_KEYWORDS = new Set([
  "default",
  "example",
  "examples",
  "exclusiveMaximum",
  "exclusiveMinimum",
  "externalDocs",
  "format",
  "maxItems",
  "maxLength",
  "maxProperties",
  "maximum",
  "minItems",
  "minLength",
  "minProperties",
  "minimum",
  "multipleOf",
  "pattern",
  "readOnly",
  "title",
  "uniqueItems",
  "writeOnly",
  "xml",
]);

const pascalCase = (value) =>
  value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
const propertyKey = (name) => (/^[A-Za-z_$][\w$]*$/.test(name) ? name : JSON.stringify(name));

function resolve(node) {
  if (!node.$ref) return node;
  const target = node.$ref
    .split("/")
    .slice(1)
    .reduce((value, key) => value?.[key], spec);
  if (!target) throw new Error(`Unresolved reference: ${node.$ref}`);
  return target;
}

function docComment(node, indent) {
  const lines = node.description?.replaceAll("*/", "*\\/").split("\n") ?? [];
  if (node.deprecated) lines.push("@deprecated");
  if (!lines.length) return "";
  const body = lines.map((line) => `${indent} * ${line}`.trimEnd()).join("\n");
  return `${indent}/**\n${body}\n${indent} */\n`;
}

function objectType(schema, indent) {
  const inner = `${indent}  `;
  const required = new Set(schema.required ?? []);
  const members = Object.entries(schema.properties ?? {}).map(([name, property]) => {
    const optional = required.has(name) ? "" : "?";
    const type = schemaType(property, inner);
    return `${docComment(resolve(property), inner)}${inner}${propertyKey(name)}${optional}: ${type};`;
  });
  const extra = schema.additionalProperties;
  if (extra) {
    const type = extra === true ? "unknown" : schemaType(extra, inner);
    members.push(`${inner}[key: string]: ${type === "unknown" ? type : `${type} | undefined`};`);
  }
  return members.length ? `{\n${members.join("\n")}\n${indent}}` : "Record<string, never>";
}

function composedType(parts, separator, indent) {
  return parts.map((part) => `(${schemaType(part, indent)})`).join(separator);
}

function baseType(schema, indent) {
  if (schema.enum) return schema.enum.map((value) => JSON.stringify(value)).join(" | ");
  if (schema.oneOf) return composedType(schema.oneOf, " | ", indent);
  if (schema.anyOf) return composedType(schema.anyOf, " | ", indent);
  if (schema.allOf) return composedType(schema.allOf, " & ", indent);
  if (schema.type === "array") return `(${schemaType(schema.items, indent)})[]`;
  if (schema.type === "object" || (!schema.type && schema.properties)) {
    return objectType(schema, indent);
  }
  if (schema.type === "integer" || schema.type === "number") return "number";
  if (schema.type === "string" || schema.type === "boolean") return schema.type;
  if (!schema.type) return "unknown";
  throw new Error(`Unsupported OpenAPI type: ${schema.type}`);
}

function schemaType(schema, indent = "") {
  if (schema.$ref?.startsWith(SCHEMA_REF)) {
    resolve(schema);
    return pascalCase(schema.$ref.slice(SCHEMA_REF.length));
  }
  if (schema.$ref) throw new Error(`Unsupported schema reference: ${schema.$ref}`);
  for (const keyword of Object.keys(schema)) {
    const known = HANDLED_KEYWORDS.has(keyword) || IGNORED_KEYWORDS.has(keyword);
    if (!known && !keyword.startsWith("x-")) {
      throw new Error(`Unsupported OpenAPI keyword: ${keyword}`);
    }
  }
  const type = baseType(schema, indent);
  return schema.nullable ? `(${type}) | null` : type;
}

const declarations = new Map();

function declare(name, type, node) {
  if (declarations.has(name)) throw new Error(`Duplicate type name: ${name}`);
  declarations.set(name, `${docComment(node, "")}export type ${name} = ${type};`);
}

function declareParams(name, parameters) {
  if (!parameters.length) return;
  const members = parameters.map((parameter) => {
    const optional = parameter.required ? "" : "?";
    const type = schemaType(parameter.schema, "  ");
    return `${docComment(parameter, "  ")}  ${propertyKey(parameter.name)}${optional}: ${type};`;
  });
  declare(`${name}Params`, `{\n${members.join("\n")}\n}`, {});
}

function declareSchema(name, schema, description) {
  const target = resolve(schema);
  declare(name, schemaType(schema), {
    description: description ?? target.description,
    deprecated: target.deprecated,
  });
}

function operationName(path, method) {
  const route = pascalCase(path.replace(/\{[^}]+\}/g, ""));
  const verb = method === "get" && !path.endsWith("}") ? "List" : VERBS[method];
  return `${route}${verb}`;
}

for (const [name, schema] of Object.entries(spec.components?.schemas ?? {})) {
  declareSchema(pascalCase(name), schema);
}

for (const [path, item] of Object.entries(spec.paths)) {
  for (const [method, operation] of Object.entries(item)) {
    if (!VERBS[method]) continue;
    const name = operationName(path, method);

    const body = operation.requestBody && resolve(operation.requestBody);
    const bodySchema = body?.content?.["application/json"]?.schema;
    if (bodySchema) declareSchema(`${name}Body`, bodySchema, body.description);

    declareParams(name, [...(item.parameters ?? []), ...(operation.parameters ?? [])].map(resolve));

    for (const [status, value] of Object.entries(operation.responses)) {
      const response = resolve(value);
      const schema = response.content?.["application/json"]?.schema;
      const suffix = status === "200" ? "Response" : `Response${status}`;
      if (schema) declareSchema(`${name}${suffix}`, schema, response.description);
    }
  }
}

const header = "// Generated from openapi.json by `yarn generate`. Do not edit.";
writeFileSync(output, `${[header, ...declarations.values()].join("\n\n")}\n`);
