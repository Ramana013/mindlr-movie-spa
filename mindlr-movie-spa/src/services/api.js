import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

// MAKE SURE THESE ARE EXPORTED:
export const fetchMovies = (page = 1) => api.get('/movie/popular', { params: { page } });

export const searchMovies = (query, page = 1) => {
  return api.get('/search/movie', {
    params: {
      query,
      page,
      include_adult: false,
    },
  });
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500";