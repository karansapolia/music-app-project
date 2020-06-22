import axios from 'axios';
import axiosConfig from '../config/axiosConfig';

const user = JSON.parse(localStorage.getItem('user'));

function getToken() {
  if (user) {
    axiosConfig.headers.authorization = `Bearer ${user.token}`;
  }
}

const signup = async body => {
  try {
    delete axiosConfig.headers.authorization;
    const response = await axios.post('auth/signup', body, axiosConfig);
    return response.data.user;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err);
  }
};

const signin = async body => {
  try {
    delete axiosConfig.headers.authorization;
    const response = await axios.post('auth/signin', body, axiosConfig);
    return response.data.user;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err);
  }
};

const fetchItunesSearchAPIResults = async term => {
  let response = null;
  try {
    if (term) {
      response = await axios.get(`/search/${term}`, {
        crossdomain: true,
        withCredentials: true,
      });
    } else {
      response = await axios.get(`/search/Sushant+Singh+Rajput`, {
        crossdomain: true,
        withCredentials: true,
      });
    }
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

const fetchFirst20Songs = async token => {
  try {
    if (token) {
      axiosConfig.headers.authorization = `Bearer ${token}`;
    } else {
      getToken();
    }
    const response = await axios.get('/songs/20', axiosConfig);
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

export { signup, signin, fetchItunesSearchAPIResults, fetchFirst20Songs };
