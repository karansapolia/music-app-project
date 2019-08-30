import authRoutes from './auth';
import userRoutes from './user';

const init = server => {
  server.get('/', (req, res, next) => {
    res.send({ status: 'ok' });
    return next();
  });

  server.get('/*', (req, res, next) => {
    console.log(`Receving request: ${req.originalUrl}`);
    return next();
  });

  server.use('/auth', authRoutes);
  server.use('/user', userRoutes);
};


const routes = {
  init,
};

export default routes;
