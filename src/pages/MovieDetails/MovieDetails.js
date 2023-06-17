import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import StarRatings from "react-star-ratings/build/star-ratings";

import './MovieDetails.css';

import {movieRequests} from "../../api/requests/movieRequest";
import {imgPoster} from "../../api/Endpoints";

export const MovieDetails = () => {

    const {id} = useParams();
    const [card, setCard] = useState([]);

    useEffect(() => {
        if (id) {
            movieRequests.getMovieById(id).then(({data}) => {
                if (data) return setCard(data)
            })
        }
    }, [id]);

    return (
        <div className={"movie"}>
            <div className={"movie__intro"}>
                <img className={"movie__backdrop"} src={`${imgPoster}${card ? card.backdrop_path : ""}`} alt='-_-' />
            </div>
            <div className={"movie__detail"}>
                <div className={"movie__detailLeft"}>
                    <div className={"movie__posterBox"}>
                        <img className={"movie__poster"} src={`${imgPoster}${card ? card.poster_path : ""}`} alt='-_-' />
                    </div>
                </div>
                <div className={"movie__detailRight"}>
                    <div className={"movie__detailRightTop"}>
                        <div className={"movie__name"}>{card ? card.title : ""}</div>
                        <div className={"movie__tagline"}>{card ? card.tagline : ""}</div>
                        <div className={"movie__rating"}>
                            <StarRatings
                                rating={card.vote_average}
                                starRatedColor="gold"
                                numberOfStars={10}
                                name='rating'
                                starDimension="20px"
                                starSpacing="5px"
                            />
                        </div>
                        <div className={"movie__runtime"}>{card ? card.runtime + " mins" : ""}</div>
                        <div className={"movie__releaseDate"}>{card ? "Release date: " + card.release_date : ""}</div>
                        <div className={"movie__genres"}>
                            {
                                card && card.genres ? card.genres.map(genre => (
                                        <><span className={"movie__genre"} id={genre.id}>{genre.name}</span></>
                                    )) : ""
                            }
                        </div>
                    </div>
                    <div className={"movie__detailRightBottom"}>
                        <div className={"synopsisText"}>Synopsis</div>
                        <div>{card ? card.overview : ""}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};