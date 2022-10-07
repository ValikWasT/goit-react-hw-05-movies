import { API_KEY } from './apiKey';

const axios = require('axios').default;

export const fetchTrends = async () => {
  return await axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(r => r.data.results);
};

export const fetchMovieById = async movieId => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
    .then(r => r);
};

export const fetchMovieCast = async movieId => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(r => r);
};

export const fetchReviews = async movieId => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(r => r.data.results);
};

export const fetchMovieByName = async movieName => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movieName}`
    )
    .then(r => r.data.results);
};
