import Mongoose from 'mongoose';
import environments from '../env';
import logger from '../logger';

interface DatabaseConfig {
  DBNAME: string;
  HOST: string;
  USERNAME: string;
  PASSWORD: string;
  OPTIONS: any;
  CONNECTION_URI: string;
}

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = environments;

const DATABASE_CONFIG: DatabaseConfig = {
  DBNAME: DB_NAME,
  HOST: DB_HOST,
  USERNAME: DB_USERNAME,
  PASSWORD: DB_PASSWORD,
  OPTIONS: {
    useNewUrlParser: true,
  },
  CONNECTION_URI: [
    'mongodb://',
    DB_USERNAME && DB_PASSWORD ? `${DB_USERNAME}:${DB_PASSWORD}@` : '',
    DB_HOST,
    '/',
    DB_NAME,
  ].join(''),
};

/* Terminate Server if any DB Configuration is missing
   To exclude any of the configuration add it in the exclude_config_keys array. */
const exclusions = ['USERNAME', 'PASSWORD'];
Object.keys(DATABASE_CONFIG).forEach(key => {
  if (!DATABASE_CONFIG[key] && !exclusions.includes(key)) {
    logger.error(`[Error] Missing MongoDB Config: ${key}`);
    process.exit(1);
  }
});

export default class Database {
  connect(): Promise<any> {
    const { CONNECTION_URI, OPTIONS } = DATABASE_CONFIG;
    return new Promise(async (resolve, reject) => {
      try {
        Mongoose.Promise = global.Promise;
        Mongoose.set('useUnifiedTopology', true);
        await Mongoose.connect(CONNECTION_URI, OPTIONS);
        logger.info('Connection to Database successful');
        resolve(true);
      } catch (err) {
        logger.error(`Database connection error ${JSON.stringify(err)}`);
        reject(err);
      }
    });
  }
}
