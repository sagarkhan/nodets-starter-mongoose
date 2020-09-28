import express from 'express';
import examplesRouter from './controllers/examples/example.router';

const Router = express.Router();

const routes = [
  {
    route: '/examples',
    router: examplesRouter,
  },
];

routes.forEach(item => {
  Router.use(item.route, item.router);
});

export default Router;
