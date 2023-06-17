import {useDispatch, useSelector} from "react-redux";
import {NavLink, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {movieActions} from "../../redux/slices/movieSlice";
import {baseImgURL} from "../../api/Endpoints";

export const Popular = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getPopularMovies({page: query.get('page')}))
    }, [dispatch, query]);

    return (
        <div className={'movies_content'}>
            <h1>Popular</h1>
            <div className={'movies_container'}>
                {movies && movies.map(item => {const {id, poster_path, title} = item;

                    return (
                        <div>
                            <NavLink style={{textDecoration: 'none', color: 'white'}} to={`/movie/${id}`}>
                                <div key={id} className={'poster_block'}>
                                    <img className={'poster'} src={`${baseImgURL}${poster_path}`} alt={title}/>
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
            <div className={'pagination_buttons'}>
                <button className={'pagination_btn'}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                </button>
                <button className={'pagination_btn'}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                </button>
            </div>
        </div>
    );
};