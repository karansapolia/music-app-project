const config = {};

if (process.env.NODE_ENV === 'production') {
  config.baseURL = 'https://groove-music-prod.herokuapp.com';
  config.headers = {
    'Content-Type': 'application/json',
  };
} else {
  config.baseURL = 'http://localhost:3030';
  config.headers = {
    'Content-type': 'application/json',
  };
}

export default config;
