/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextFunction, Request, Response } from 'express';
import { ResponseSchema, HttpStatus } from '../common/constants';

export const responseHandler = handler => {
  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const result = await handler(req, res, next);
      res.status(result?.status || HttpStatus.OK).send(result);
    } catch (err) {
      res.status(err?.status || HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  };
};

export const responseFormatter = (
  status?: number,
  data?: Record<string, unknown> | Array<any>,
  page?: number,
  size?: number,
  total?: number,
) => {
  const response: ResponseSchema = {
    data,
    status,
    page,
    size,
    total,
  };
  return response;
};
