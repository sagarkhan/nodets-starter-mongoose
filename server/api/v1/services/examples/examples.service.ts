import logger from '../../../../common/logger';
import { ExampleModel } from '../../models';

export class ExamplesService {
  async all(query?: Record<string, unknown>): Promise<any> {
    try {
      logger.info(`[Service-Examples] find all ${query}`);
      const result = await ExampleModel.find(query);
      return result;
    } catch (err) {
      logger.info(`[Service-Examples] find all failed ${JSON.stringify(err)}`);
      throw err;
    }
  }

  async get(id: string, query?: Record<string, unknown>): Promise<any> {
    try {
      logger.info(`[Service-Examples] get by id ${id}`);
      const result = await ExampleModel.findById(id, query);
      return result;
    } catch (err) {
      logger.info(`[Service-Examples] get by id failed ${JSON.stringify(err)}`);
      throw err;
    }
  }

  async create(data: Record<string, unknown>): Promise<any> {
    try {
      logger.info('[Service-Examples] create');
      const result = await ExampleModel.create(data);
      return this.get(result?.id);
    } catch (err) {
      logger.info(`[Service-Examples] create failed ${JSON.stringify(err)}`);
      throw err;
    }
  }

  async patch(
    id: string,
    data: Record<string, unknown>,
    query?: Record<string, unknown>,
  ): Promise<any> {
    try {
      logger.info('[Service-Examples] patch');
      const condition = query || { id };
      const update = { $set: data };
      await ExampleModel.update(condition, update);
      return this.get(id);
    } catch (err) {
      logger.info(`[Service-Examples] patch failed ${JSON.stringify(err)}`);
      throw err;
    }
  }

  async delete(id: string, query?: Record<string, unknown>): Promise<any> {
    try {
      logger.info('[Service-Examples] delete');
      const q = query || { id };
      const result = await ExampleModel.remove(q);
      return result;
    } catch (err) {
      logger.info(`[Service-Examples] delete failed ${JSON.stringify(err)}`);
      throw err;
    }
  }
}

export default new ExamplesService();
