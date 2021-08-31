import express from 'express';
import { responseHandler } from '../../../../middlewares/response.handler';
import controller from './example.controller';

const Router = express.Router();

Router.post('/', responseHandler(controller.create.bind(controller)));
Router.get('/', responseHandler(controller.find.bind(controller)));
Router.get('/:id', responseHandler(controller.get.bind(controller)));
Router.patch('/:id', responseHandler(controller.patch.bind(controller)));
Router.delete('/:id', responseHandler(controller.delete.bind(controller)));

export default Router;
