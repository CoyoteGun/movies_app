import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreRequests} from "../../api/requests/genreRequests";

const initialState = {
    genres: []
};

const getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreRequests.getAll();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genres = genres
            })
});

const {reducer: genreReducer} = genresSlice;
const genreActions = {getGenres};

export {
    genreReducer,
    genreActions
};