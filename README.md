# Magic Hour API Types

TypeScript types for the [Magic Hour API](https://docs.magichour.ai), generated from its OpenAPI spec.

It will be published to npm as `@magichourhq/api-types`. The package is not available yet.

The package contains only types, so import it with `import type`:

```ts
import type {
  AiImageGeneratorCreateImageData,
  VideoProjectsGetDetailsError,
  VideoProjectsGetDetailsResponse,
} from "@magichourhq/api-types";

type ImageRequest = AiImageGeneratorCreateImageData["body"];
```

Type names come from each endpoint's OpenAPI operation ID. Fields use the same snake_case names as the REST API.

## Update the types

Replace `openapi.json`, then run:

```sh
yarn generate
```
