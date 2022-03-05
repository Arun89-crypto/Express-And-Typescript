# Steps to initialize a typescript express project

```shell
npx tsc --init
yarn init
yarn add ts-node-dev typescript -D
```

- Add the script to package.json

```json
"scripts": {
        "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
}
```

Install these also

```shell
yarn add @types/node @types/express -D
```

Install helmet for more application security

```shell
yarn add helmet
```

```js
import helmet from "helmet";
app.use(helmet());
```

## Recommended Application Structure :

1. create **routes.ts** file for storing all the routes

```js
// In routes.ts
import { Express } from "express";
function routes(app: Express) {}
// In app.ts
routes(app);
```

2. Controllers Folder will contain all the functions to be executed in routes

3. Services Folder will contain all the function for making database calls.

4. Models folder will contain all the database schemas

**Import Heirarchy**

```
Models -> Services -> Controllers -> Routes
```

## Some Extra folders :

- Utils : For extra utilities
- Middleware : For our middleware functions
