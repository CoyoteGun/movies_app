import {axiosRequest} from "../../utils/axiosConfig";
import {apiKey, baseURL, moviesURL} from "../Endpoints";

const movieRequests = {
    getAll: (page) => axiosRequest.get(`${moviesURL}${apiKey}&page=${page}`),
    getMovieById: (id) => axiosRequest.get(`${baseURL}/movie/${id}${apiKey}`),
    search: (query) => axiosRequest.get(`${baseURL}/search/movie${apiKey}&query=${query}`),
    getTopRated: (page) => axiosRequest.get(`${baseURL}/movie/top_rated${apiKey}&page=${page}`),
    getPopular: (page) => axiosRequest.get(`${baseURL}/movie/popular${apiKey}&page=${page}`),
    getUpcoming: (page) => axiosRequest.get(`${baseURL}/movie/upcoming${apiKey}&page=${page}`)
};

export {
    movieRequests
};