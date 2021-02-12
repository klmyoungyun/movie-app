import axios from "axios";

const TMDB_KEY = "f83d3b90bf8ddd99af5dff25a3ee928b";
const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: { ...params, api_key: TMDB_KEY },
  });
const getApi = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};
export const movieApi = {
  nowPlaying: () =>
    getApi("/movie/now_playing", { language: "ko-KR", region: "kr" }),
  popularMovie: () =>
    getApi("/movie/popular", { language: "ko-KR", region: "kr" }),
  upComing: () =>
    getApi("/movie/upcoming", { language: "ko-KR", region: "kr" }),
  discover: () => getApi("/discover/movie"),
  searchMovie: (query) =>
    getApi("/search/movie", { language: "ko-KR", region: "kr", query }),
  movie: (id) => getApi(`/movie/${id}`, { language: "ko-KR" }),
};
export const tvApi = {
  airingToday: () =>
    getApi("/tv/airing_today", { language: "ko-KR", region: "kr" }),
  onTheAir: () => getApi("/tv/on_the_air", { language: "ko-KR", region: "kr" }),
  popularTv: () => getApi("/tv/popular", { language: "ko-KR", region: "kr" }),
  topRated: () => getApi("/tv/top_rated", { language: "ko-KR", region: "kr" }),
  searchTv: (query) =>
    getApi("/search/tv", { language: "ko-KR", region: "kr", query }),
  tv: (id) => getApi(`/tv/${id}`, { language: "ko-KR" }),
};

export const imageApi = (path) => `https://image.tmdb.org/t/p/w500${path}`;
