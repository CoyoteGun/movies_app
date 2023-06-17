import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './Genres.css';

import {genreActions} from "../../redux/slices/genreSlice";
import {movieRequests} from "../../api/requests/movieRequest";
import {movieActions} from "../../redux/slices/movieSlice";

export const Genres = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {dispatch(genreActions.getGenres());}, [dispatch]);

    const [selectedGenre, setSelectedGenre] = useState(null);

    const handleGenreChange = (event) => {
        const selectedGenreId = parseInt(event.target.value);
        setSelectedGenre(selectedGenreId);

        if (selectedGenreId !== -1) {
            getMoviesByGenreId(selectedGenreId);
        }
    };

    const getMoviesByGenreId = (id) => {
        const arr = [];
        movieRequests.getAll(1).then((allMovies) => {
            allMovies.data.results.map((res) => {
                if (res['genre_ids'].includes(id)) {
                    arr.push(res);
                }
            });
            dispatch(movieActions.getMoviesByGenreId(arr));
        });
    };

    return (
        <div className="genres">
            <select className="genres_dropdown" value={selectedGenre || -1} onChange={handleGenreChange}>
                <option value={-1}>Select a genre</option>
                {genres && genres.map(item => {
                    const {id, name} = item;
                    return (
                        <option key={id} value={id}>{name}</option>
                    );
                })}
            </select>
        </div>
    );
};
