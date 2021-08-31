import express, { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import * as OpenApiValidator from 'express-openapi-validator';
import logger from './logger';
import errorHandler from '../middlewares/error.handler';
import Database from '../middlewares/db.handler';
import environments from './env';

const app = express();
export default class ExpressServer {
  private routes: (app: Application) => void;
  root = '';
  constructor() {
    this.root = path.join(__dirname, '/../..');
    new Database().connect();
  }

  /* All middlewares should be added here (Pre route initialization) */
  initializeMiddlewares(): void {
    app.set('appPath', `${this.root} client`);
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      }),
    );
    app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(express.static(`${this.root}/public`));

    /* Initialize validator & swagger doc */
    const apiSpec = path.join(__dirname, '../../docs/', 'api.yml');
    const validateResponses = !!(
      environments.OPENAPI_ENABLE_RESPONSE_VALIDATION && environments.OPENAPI_ENABLE_RESPONSE_VALIDATION.toLowerCase() === 'true'
    );
    app.use(
      OpenApiValidator.middleware({
        apiSpec,
        validateResponses,
        validateRequests: false,
      }),
    );
    app.use(environments.OPENAPI_SPEC || '/spec', express.static(apiSpec));
  }

  /* All middlewares should be added here (Post route initialization) */
  postInitializationMiddlewares(): void {
    app.use(errorHandler);
  }

  router(routes: (app: Application) => void): ExpressServer {
    this.routes = routes;
    return this;
  }

  listen(port: number): Application {
    const welcome = (p: number) => (): void => logger.info(`up and running in ${environments.NODE_ENV} @: ${os.hostname()} on port: ${p}}`);
    /* Middlewares Before Route Initialisation */
    this.initializeMiddlewares();

    /* Route Initialisation */
    this.routes(app);

    /* Middlewares after route initialisation */
    this.postInitializationMiddlewares();
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
