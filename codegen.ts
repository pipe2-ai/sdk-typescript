import type { CodegenConfig } from '@graphql-codegen/cli';

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
