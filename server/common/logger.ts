import pino from 'pino';
import environments from './env';

const logger = pino({
  name: environments.APP_ID,
  level: environments.LOG_LEVEL,
});

export default logger;
