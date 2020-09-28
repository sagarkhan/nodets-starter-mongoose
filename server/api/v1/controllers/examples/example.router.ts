import express from 'express';
import { responseHanlder } from '../../../../common/middlewares/response.handler';
import controller from './example.controller';

const Router = express.Router();

Router.post('/', responseHanlder(controller.create));
Router.get('/', responseHanlder(controller.find));
Router.get('/:id', responseHanlder(controller.get));
Router.patch('/:id', responseHanlder(controller.patch));
Router.delete('/:id', responseHanlder(controller.delete));

export default Router;
