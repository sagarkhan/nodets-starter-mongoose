import './common/env';
import Server from './common/server';
import routes from './routes';

const port = Number(process.env.PORT);
export default new Server().router(routes).listen(port);
