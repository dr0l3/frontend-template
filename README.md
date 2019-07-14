# Template frontend

## Getting here

### Basic structure
`npx create-react-app template-frontend --typescript`

### Basic ts config

add `"exclude": ["src/types/graphql-global-types.ts", "node_modules"]` to `tsconfig.json` to ignore generated code

### Adding ability to refresh schema

`"schema-refresh": "apollo schema:download --endpoint http://localhost:4466"` to npm scripts this refreshes the schema

### Adding ability to generate code

`"types:generate": "apollo codegen:generate --target typescript --excludes=node_modules/* --includes=**/*.tsx --endpoint http://localhost:4466 --tagName=gql --outputFlat src/generated --passthroughCustomScalars --customScalarsPrefix giftregistry"`