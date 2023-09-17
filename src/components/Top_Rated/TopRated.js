import {useDispatch, useSelector} from "react-redux";
import {NavLink, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import StarRatings from "react-star-ratings/build/star-ratings";

import './TopRated.css';

import {movieActions} from "../../redux/slices/movieSlice";
import {baseImgURL} from "../../api/Endpoints";

export const TopRated = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getTopMovies({page: query.get('page')}))
    }, [dispatch, query]);

    return (
        <div className={'movies_top_content'}>
            <h1 className={'top_title'}>TopRated</h1>
            <div className={'movies_top_container'}>
                {movies && movies.map(item => {const {id, poster_path, title, vote_average} = item;

                    return (
                        <div>
                            <NavLink style={{textDecoration: 'none', color: 'white'}} to={`/movie/${id}`}>
                                <div key={id} className={'poster_top_block'}>
                                    <img className={'poster_top'} src={`${baseImgURL}${poster_path}`} alt={title}/>
                                    <div>{title}</div>
                                    <StarRatings
                                        rating={vote_average}
                                        starRatedColor="gold"
                                        numberOfStars={10}
                                        name='rating'
                                        starDimension="20px"
                                        starSpacing="5px"
                                    />
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