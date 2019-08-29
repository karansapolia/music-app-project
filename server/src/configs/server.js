import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import env from './env';
import routes from '../routes';

const app = () => {
  const server = express();

  const create = () => {
    server.set('port', env.port);
    server.use(json());
    server.use(urlencoded({ extended: true }));
    server.use(cors);

    routes.init(server);
  };

  const start = () => {
    const port = server.get('port');
    server.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  };

  return {
    create,
    start,
  };
};

export default app;
