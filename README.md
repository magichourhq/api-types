# Magic Hour API Types

TypeScript types for the [Magic Hour API](https://docs.magichour.ai), generated from its OpenAPI spec.

It will be published to npm as `@magichourhq/api-types`. The package is not available yet.

The package contains only types, so import it with `import type`:

```ts
import type { paths } from "@magichourhq/api-types";

type VideoProject =
  paths["/v1/video-projects/{id}"]["get"]["responses"][200]["content"]["application/json"];
```

## Update the types

Replace `openapi.json`, then run:

```sh
yarn generate
```
