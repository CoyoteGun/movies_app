import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieRequests} from "../../api/requests/movieRequest";

let initialState = {
    movies: [],
    prev: null,
    next: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieRequests.getAll(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getTopMovies = createAsyncThunk(
    'movieSlice/getTopMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieRequests.getTopRated(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getPopularMovies = createAsyncThunk(
    'movieSlice/getPopularMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieRequests.getPopular(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const getUpcomingMovies = createAsyncThunk(
    'movieSlice/getUpcomingMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieRequests.getUpcoming(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getSearchMovies: (state, action) => {
            state.movies = action.payload
        },
        getMoviesByGenreId: (state, action) => {
            state.movies = action.payload
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {results, prev, next} = action.payload;
                state.movies = results
                state.prev = prev
                state.next = next
            })
            .addCase(getTopMovies.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.movies = results
            })
});

const {reducer: movieReducer, actions: {getSearchMovies, getMoviesByGenreId}} = movieSlice;

const movieActions = {
    getMovies,
    getTopMovies,
    getPopularMovies,
    getUpcomingMovies,
    getSearchMovies,
    getMoviesByGenreId
};

export {
    movieReducer,
    movieActions
};