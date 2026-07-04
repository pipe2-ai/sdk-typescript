import type { CodegenConfig } from '@graphql-codegen/cli';

// The admin-role SDK lives in packages/sdk-admin-ts (private, never published) —
// this package is published to npm and must only ever contain the USER-role
// schema surface.
const config: CodegenConfig = {
  schema: '../graphql/user-schema.graphql',
  documents: '../graphql/operations/*.graphql',
  ignoreNoDocuments: true,
  generates: {
    'generated/sdk.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-generic-sdk',
      ],
      config: {
        rawRequest: false,
        skipDocumentsValidation: true,
      },
    },
  },
};

export default config;
