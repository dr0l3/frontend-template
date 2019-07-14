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

### Add dependencies

```
   "version": "0.1.0",
   "private": true,
   "dependencies": {
+    "@types/faker": "^4.1.5",
+    "@types/graphql": "^14.2.0",
     "@types/jest": "24.0.15",
     "@types/node": "12.6.2",
     "@types/react": "16.8.23",
     "@types/react-dom": "16.8.4",
+    "apollo": "^2.8.3",
+    "apollo-cache-inmemory": "^1.5.1",
+    "apollo-client": "^2.5.1",
+    "apollo-link": "^1.2.11",
+    "apollo-link-context": "^1.0.17",
+    "apollo-link-error": "^1.1.10",
+    "apollo-link-http": "^1.5.14",
+    "apollo-link-schema": "^1.2.2",
+    "faker": "^4.1.0",
+    "graphql": "^14.2.1",
+    "graphql-tag": "^2.10.1",
+    "graphql-tools": "^4.0.4",
+    "immer": "^2.1.4",
     "react": "^16.8.6",
     "react-dom": "^16.8.6",
+    "react-apollo": "^2.5.4",
+    "react-apollo-hooks": "^0.4.5",
     "react-scripts": "3.0.1",
     "typescript": "3.5.3"
   },

```