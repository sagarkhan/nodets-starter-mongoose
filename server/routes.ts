import { Application } from 'express';
import V1Routes from './api/v1/routes';

export default function routes(app: Application): void {
  app.use('/api/v1', V1Routes);
}
