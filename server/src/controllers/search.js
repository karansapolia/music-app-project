import axios from 'axios';

const searchController = async searchTerm => {
  let response = null;
  try {
    if (searchTerm) {
      response = await axios.get(`http://itunes.apple.com/search?term=${searchTerm}`, {
        crossdomain: true,
        withCredentials: true,
      });
    } else {
      response = await axios.get(`http://itunes.apple.com/search?term=Sushant+Singh+Rajput`, {
        crossdomain: true,
        withCredentials: true,
      });
    }
    return response.data.results.filter(entry => entry.kind === 'song');
  } catch (err) {
    throw new Error(err);
  }
};

export default searchController;
