# nodets-starter-mongoose

Node Typescript Boilerplate with mongoose configured

## Quick Start

Get started developing

```shell
# install dependencies
npm install

# run in development mode
npm run dev

# run in debug mode
npm run dev:debug

# run tests
npm run test
```

---

## Directory Structure

- Swagger docs to be maintained in `/docs/api.yml`.
- Test cases to be maintained in `/test`.
- The Application logic to be maintaind in `/server` directory.

**Following is the directory structure of server directory**

> /api
- > /v1
  - > /controllers
  - > /models
  - > /services
> /common

- `api`: Contains the API services of the application.

- `v1`: Versioning of API, V1, V2, V3... folders can be added and their entry needs to be configured in `/api/routes.ts`.

- `controllers`: The API routes and controller logic should be added here within a folder. `.router.ts` file contains all the open routes of the API. `.controller.ts` file contains the validation and data transformation logic.

- `services`: `.service.ts` Contains the database CRUD logic. 

- `models`: `.model.ts` Contains the schema defination of the database collection.

- `common`: Common utilities of the application are configured in this directory.

## Start Creating APIs?

There are two key files:

1. `server/api/routes.js` - This references the implementation of all of your routes. Add as many routes as you like and point each route your express handler functions. V1 and V2 nested routing is configured in this project.
2. `server/common/api.yaml` - This file contains your [OpenAPI spec](https://swagger.io/specification/). Describe your API here. It's recommended that you to declare any and all validation logic in this YAML. `express-no-stress-typescript` uses [express-openapi-validator](https://github.com/cdimascio/express-openapi-validator) to automatically handle all API validation based on what you've defined in the spec.
3. `server/api/v1/controllers/examples` - This contains a reference API you can use to get started.

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It

#### Run in _development_ mode:

Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in _production_ mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It

- Open you're browser to [http://localhost:3000](http://localhost:3000)
- Invoke the `/examples` endpoint
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```

## Debugging

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

Add the following code to your `.vscode/launch.json` file

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
- Maintain clean isolation
  "version": "0.2.0",
  "configurations": [
    {
        "type": "node",
        "request": "attach",
        "name": "Attach",
        "port": 9229
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Tests",
      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
        "--timeout",
        "999999",
        "--colors",
        "${workspaceFolder}/test",
        "--compilers",
        "js:@babel/register",
        "--exit"
      ],
      "internalConsoleOptions": "openOnSessionStart"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Server",
      "runtimeExecutable": "nodemon",
      "runtimeArgs": ["--exec", "babel-node"],
      "program": "${workspaceFolder}/server/index.js",
      "restart": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

## Coding Standards

Following are the coding standards that one must strictly follow while working on this boilerplate.

- Mandatory to follow AirBnB [AirBnB coding standards](https://github.com/airbnb/javascript/blob/master/README.md)

- JS Linting before every commit `npm run lint`. AirBnB lint configurations are already loaded.

- Do not modify linter rules without consulting.

- Follow 2 space indentation rule. Install `ext install EditorConfig.EditorConfig` VS Code plugin. The `.editorconfig` in project root dir will overwite default indentation settings of VS code to meet project standards.

- Use ECMA Revision 6 Coding patterns.

- All external url’s and configurations should be env based.

- All external API calls should be made through the HttpClient wrapper in `/server/common/http-client.ts`.

- All the APIs should be well documented in swagger `/docs` directory.

- All environment varaibles should be referred from `/server/common/env.ts`.

- For returning API response `responseHandler` middleware should be used: Refer:- `/server/api/v1/controllers/examples/example.router.ts`

- API response should be formatted using `responseFormatter` function: Refer:- `/server/api/v1/controllers/examples/example.controller.ts`.

- HttpStatus codes should be referred from `HttpStatus` enum in `/server/common/constants.ts`

- Error Handling should use the `HttpErrors` class of `/server/common/errors.ts`. Refer:- `/server/api/v1/controllers/examples/example.controller.ts`

- Logging at each level with the following naming prefixes following by the API module name.
  - Service
  - Contoroller
  - Router

Example: `Service-{Service_Name}`
## Author

- Sagar Khan - sk.sagarkhan95@gmail.com
