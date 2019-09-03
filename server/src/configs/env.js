const envConfig = {
  port: process.env.port || 3030,
  databaseUrl: process.env.DB_URL || 'mongodb://localhost:27017/music-app',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '7d',
  },
};

export default Object.freeze(envConfig);
