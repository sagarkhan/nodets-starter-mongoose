import express, { Application } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import logger from './logger';
import installValidator from './openapi';
import errorHandler from './middlewares/error.handler';
import Database from './middlewares/db.handler';

const app = express();
const { exit } = process;

export default class ExpressServer {
  private routes: (app: Application) => void;
  root = '';
  constructor() {
    this.root = path.join(__dirname, '/../..');
    new Database().connect();
  }

  /* All middlewares should be added here (Pre route initialization) */
  preInitializationMiddlewares(): void {
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
    const welcome = (p: number) => (): void =>
      logger.info(
        `up and running in ${
          process.env.NODE_ENV || 'development'
        } @: ${os.hostname()} on port: ${p}}`,
      );

    this.preInitializationMiddlewares();
    installValidator(app, this.routes)
      .then(() => {
        this.postInitializationMiddlewares();
        http.createServer(app).listen(port, welcome(port));
      })
      .catch(e => {
        logger.error(e);
        exit(1);
      });

    return app;
  }
}
