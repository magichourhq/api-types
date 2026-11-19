# Magic Hour API Types

[![npm](https://img.shields.io/npm/v/@magichourhq/api-types)](https://www.npmjs.com/package/@magichourhq/api-types)

TypeScript types for the [Magic Hour API](https://docs.magichour.ai), generated from its OpenAPI spec.

Magic Hour's JavaScript integrations, such as [`@magichourhq/browser-client`](https://github.com/magichourhq/browser-client), use these types for request bodies and responses. Each integration imports them instead of writing its own copy, so they all match the API spec.

> [!IMPORTANT]
> This internal package supports Magic Hour's own integrations, and its types can change without notice.
> Versions may not follow semantic versioning, so any release can include breaking changes.
> Don't install it directly. Use a [Magic Hour SDK](https://docs.magichour.ai) in your own projects.

It's published to npm as `@magichourhq/api-types`.

The package contains only types, so import it with `import type`:

```ts
import type {
  AiImageGeneratorCreateBody,
  VideoProjectsGetResponse,
  VideoProjectsGetResponse404,
} from "@magichourhq/api-types";
```

Type names follow the Node SDK, without its `V1` prefix. Fields use the same snake_case names as the REST API.

## Update the types

Replace `openapi.json`, then run:

```sh
yarn generate
```

The generator stops on any OpenAPI keyword it doesn't support, so it can't silently produce wrong types.
