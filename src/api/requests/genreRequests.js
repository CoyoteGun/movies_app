import {axiosRequest} from "../../utils/axiosConfig";
import {apiKey, genresURL} from "../Endpoints";

export const genreRequests = {
    getAll: () => axiosRequest.get(`${genresURL}?api_key=${apiKey}&language=en-US`)
};