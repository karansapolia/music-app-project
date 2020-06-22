import authRoutes from './auth';
import userRoutes from './user';
import searchController from '../controllers/search';

const init = server => {
  server.get('/', (req, res, next) => {
    res.send({ status: 'ok' });
    return next();
  });

  server.get('/*', (req, res, next) => {
    console.log(`Receving request: ${req.originalUrl}`);
    return next();
  });

  server.get('/search/:searchTerm', async (req, res) => {
    console.log(req.params);
    const response = await searchController(req.params.searchTerm);
    res.send(response);
  });

  server.use('/auth', authRoutes);
  server.use('/user', userRoutes);
};

const routes = {
  init,
};

export default routes;
