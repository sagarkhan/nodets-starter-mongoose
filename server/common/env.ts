import dotenv from 'dotenv';
import { RUNTIME, DEFAULT_ENV } from './constants';

dotenv.config();

type EnvironmentSchema = {
  NODE_ENV: string;
  APP_ID: string;
  PORT: string | number;
  LOG_LEVEL: string | 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';
  REQUEST_LIMIT: string;
  SESSION_SECRET: string;
  OPENAPI_SPEC: string;
  OPENAPI_ENABLE_RESPONSE_VALIDATION: string;

  /* Database Env */
  DB_HOST: string;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_SSL: string;
};

const EnvironmentDefaults: EnvironmentSchema = {
  NODE_ENV: RUNTIME.DEV,
  APP_ID: DEFAULT_ENV.APP_ID,
  PORT: DEFAULT_ENV.PORT,
  LOG_LEVEL: DEFAULT_ENV.LOG_LEVEL,
  REQUEST_LIMIT: DEFAULT_ENV.REQUEST_LIMIT,
  SESSION_SECRET: DEFAULT_ENV.SESSION_SECRET,
  OPENAPI_SPEC: DEFAULT_ENV.OPENAPI_SPEC,
  OPENAPI_ENABLE_RESPONSE_VALIDATION: DEFAULT_ENV.OPENAPI_ENABLE_RESPONSE_VALIDATION,
  DB_HOST: DEFAULT_ENV.DB_HOST,
  DB_NAME: DEFAULT_ENV.DB_NAME,
  DB_USERNAME: DEFAULT_ENV.DB_USERNAME,
  DB_PASSWORD: DEFAULT_ENV.DB_PASSWORD,
  DB_SSL: DEFAULT_ENV.DB_SSL,
};

const getEnv = (): any => {
  const env = {};
  Object.keys(EnvironmentDefaults).forEach(key => {
    if (process.env[key]) {
      env[key] = process.env[key];
    }
  });
  return env;
};

const environments: EnvironmentSchema = { ...EnvironmentDefaults, ...getEnv() };

const requiredEnv = [];

// eslint-disable-next-line consistent-return
requiredEnv.forEach(key => {
  if (!environments[key]) {
    // eslint-disable-next-line no-console
    console.log(`[Error] Missing Environment Config: ${key}`);
    return process.exit(1);
  }
});

export default environments;
