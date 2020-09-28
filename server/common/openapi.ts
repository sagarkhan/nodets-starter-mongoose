import * as path from 'path';
import { OpenApiValidator } from 'express-openapi-validator';
import express, { Application } from 'express';
import environments from './env';

export default function installValidator(
  app: Application,
  routes: (app: Application) => void,
): Promise<void> {
  const apiSpec = path.join(__dirname, '../../docs/', 'api.yml');
  const validateResponses = !!(
    environments.OPENAPI_ENABLE_RESPONSE_VALIDATION &&
    environments.OPENAPI_ENABLE_RESPONSE_VALIDATION.toLowerCase() === 'true'
  );
  return new OpenApiValidator({
    apiSpec,
    validateResponses,
    validateRequests: false,
  })
    .install(app)
    .then(() => {
      app.use(environments.OPENAPI_SPEC || '/spec', express.static(apiSpec));
      routes(app);
    });
}
