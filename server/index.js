import app from './src/configs/server';

const appInstance = app();

appInstance.create();
appInstance.start();
