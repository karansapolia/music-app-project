import dotenv from 'dotenv';

dotenv.config();
const envConfig = {
  port: process.env.PORT,
  databaseUrl:
    'mongodb://karan-admin:q1w2e3@ds217678.mlab.com:17678/music-app' ||
    'mongodb://localhost:27017/music-app',
  clientUrl: process.env.CLIENT_URL,
  secrets: {
    jwt: 'pesto-music-app-2019', // process.env.JWT_SECRET,
    jwtExp: '1d',
  },
  EMAIL: process.env.EMAIL,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};

export default Object.freeze(envConfig);
