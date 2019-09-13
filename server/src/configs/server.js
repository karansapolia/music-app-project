import express from 'express';
import cors from 'cors';
import env from './env';
import routes from '../routes';

const app = () => {
  let application;
  const server = express();

  const create = () => {
    server.set('port', env.port);
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cors());

    routes.init(server);
  };

  const start = () => {
    const port = server.get('port');
    application = server.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  };

  const stop = () => {
    application.close(() => {
      console.log('Shutting down server');
      process.exit(0);
    });

    setTimeout(() => {
      console.log('Could not close connection gracefully, forcefully shutting down');
      process.exit(1);
    }, 10000);
  }

  return {
    create,
    start,
    stop,
  };
};

export default app;
