import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'schema.docs.graphql',
	documents: 'src/lib/api/queries.graphql',
	overwrite: true,
	generates: {
		'src/generated/queries.ts': {
			config: {
				skipTypename: false,
				enumsAsConst: true,
				preResolveTypes: true,
				useTypeImports: true
			},
			plugins: ['typescript', 'typescript-operations', 'typescript-generic-sdk']
		}
	}
};
export default config;
