# Magic Hour API Types

TypeScript types for the [Magic Hour API](https://docs.magichour.ai), generated from its OpenAPI spec.

> **Internal package.** This supports Magic Hour's own integrations, and its types can change without notice. Don't install it directly. Use a [Magic Hour SDK](https://docs.magichour.ai) in your own projects.

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
