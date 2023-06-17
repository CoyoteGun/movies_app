import axios from "axios";

import {baseURL} from '../api/Endpoints';

const axiosRequest = axios.create({baseURL});

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTZjMmUwZDRmYThmYjZmMGM5ZGFmYmMxYWE0OWQyYSIsInN1YiI6IjYzZWU3ZGJhNmFhOGUwMDA4NDgwNDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8jBDmSCLT3d9cNHQjLXgPg6F-rfEKVTGwGOcC2wqjQE`;

axiosRequest.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
});

export {
    axiosRequest
};