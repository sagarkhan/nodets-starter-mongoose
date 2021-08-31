import environments from './common/env';
import Server from './common/server';
import routes from './routes';

const port = Number(environments.PORT);
export default new Server().router(routes).listen(port);
