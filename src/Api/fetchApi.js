const axios = require('axios').default;

export const fetchTrends = async () => {
  return await axios
    .get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=88804fe82d069d316bec59240a5ee94b'
    )
    .then(r => r.data.results);
};
