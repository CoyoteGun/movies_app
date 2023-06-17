import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {NavLink} from "react-router-dom";

import './HomePage.css';

import {movieActions} from "../../redux/slices/movieSlice";
import {MoviesList} from "../../components/MoviesList/MoviesList";

export const HomePage = () => {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getPopularMovies())
    }, [dispatch]);

    return (
        <>
            <div className={'slider'}>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {movies && movies.map(item => {
                        const {id, title, backdrop_path, release_date, overview} = item;

                        return (
                            <NavLink key={id} style={{textDecoration: 'none', color: 'white'}} to={`/movie/${id}`}>
                                <div className={'slider_image'}>
                                    <img src={`https://image.tmdb.org/t/p/original${item && backdrop_path}`} alt="-_-"/>
                                </div>
                                <div className={'slider_img_overlay'}>
                                    <div className={'slider_img_title'}>{item ? title : ''}</div>
                                    <div className={'slider_img_runtime'}>
                                        {item ? release_date : ''}
                                    </div>
                                    <div className={'slider_img_desc'}>
                                        {item ? overview : ''}
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </Carousel>
                <MoviesList/>
            </div>
        </>
    );
};