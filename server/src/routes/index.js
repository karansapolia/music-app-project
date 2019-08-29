const init = server => {
  server.get('*', (req, res, next) => {
    console.log(`Receving request: ${req.originalUrl}`);
    res.send({ status: 'ok' });
    return next();
  });
};

const routes = {
  init,
};

export default routes;
