import app from './src/configs/server';
import database from './src/configs/database';
import env from './src/configs/env';

const appInstance = app();
const { databaseUrl } = env;

const shutDownApplication = () => {
  try {
    database.closeDBConnections(() => {
      appInstance.stop();
    });
    console.info('Database connection closed successfully!');
    console.log('Server stopped');
  } catch (e) {
    appInstance.stop();
  }
};

appInstance.create();
appInstance.start();

database.connectDB(databaseUrl);
database.connectionError(shutDownApplication);

process.on('SIGTERM', shutDownApplication);
process.on('SIGINT', shutDownApplication);
process.on('SIGQUIT', shutDownApplication);
