import {NavLink} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import './Header.css';

import {movieRequests} from "../../api/requests/movieRequest";
import {movieActions} from "../../redux/slices/movieSlice";
import {Genres} from "../Genres/Genres";
import {ThemeToggle} from "../ThemeToggle/ThemeToggle";

export const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const { movies } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const searchMovie = (query) => {
        if (query) {
            movieRequests.search(query).then(({ data }) => {
                dispatch(movieActions.getSearchMovies(data.results));
                setSearchValue('');
            });
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchMovie(searchValue);
        }
    };

    return (
        <div className={'header'}>
            <div className={'header_left'}>
                <NavLink className={'header_nav header_icon'} to={'/'}><span>Coyote TV</span></NavLink>
                <NavLink className={'header_nav'} to={'popular'}><span>Popular</span></NavLink>
                <NavLink className={'header_nav'} to={'top_rated'}><span>Top Rated</span></NavLink>
                <NavLink className={'header_nav'} to={'upcoming'}><span>Upcoming</span></NavLink>
                <Genres />
            </div>
            <p className={'toggle_text'}>Dark/Light
                <ThemeToggle/>
            </p>
            <div className={'header_right'}>
                <div className={'search_block'}>
                    <input
                        onChange={event => setSearchValue(event.target.value)}
                        onKeyDown={handleKeyDown}
                        value={searchValue}
                        className={'search_input'}
                        type="text"
                        placeholder={'Search'}
                    />
                    <div onClick={() => searchMovie(searchValue)} className={'search_btn'}>
                        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className={'user_profile'}>
                    <p>UA</p>
                </div>
            </div>
        </div>
    );
};
