import { Request } from 'express';
import { HttpStatus } from '../../../../common/constants';
import HttpErrors from '../../../../common/errors';
import { responseFormatter } from '../../../../middlewares/response.handler';
import ExamplesService from '../../services/examples/examples.service';

export class Controller {
  async find(): Promise<any> {
    try {
      const result = await ExamplesService.all();
      return responseFormatter(HttpStatus.OK, result);
    } catch (err) {
      throw HttpErrors.Unprocessable('', err);
    }
  }

  async get(req: Request): Promise<any> {
    try {
      const id = req?.params?.id;
      const result = await ExamplesService.get(id);
      if (!result) {
        return HttpErrors.NotFound('Record not found');
      }
      return responseFormatter(HttpStatus.OK, result);
    } catch (err) {
      throw HttpErrors.Unprocessable('', err);
    }
  }

  async create(req: Request): Promise<any> {
    try {
      const data = req?.body;
      const result = await ExamplesService.create(data);
      return responseFormatter(HttpStatus.CREATED, result);
    } catch (err) {
      throw HttpErrors.Unprocessable('', err);
    }
  }

  async patch(req: Request): Promise<any> {
    try {
      const data = req?.body;
      const id = req?.params?.id;
      const result = await ExamplesService.patch(id, data, { _id: id });
      return responseFormatter(HttpStatus.OK, result);
    } catch (err) {
      throw HttpErrors.Unprocessable('', err);
    }
  }

  async delete(req: Request): Promise<any> {
    try {
      const id = req?.params?.id;
      await ExamplesService.delete(id, { _id: id });
      return responseFormatter(HttpStatus.NO_CONTENT);
    } catch (err) {
      throw HttpErrors.Unprocessable('', err);
    }
  }
}
export default new Controller();
