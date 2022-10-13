import React, {FC, useCallback, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {favoritesSelector, moviesSelector} from '../../store/selectors';
import {fetchMoviesList, fetchNextPageMoviesId} from '../../store/actions/asyncActions';
import {addFavAction, removeFavAction} from '../../store/slices/favoriteSlice';
import {IModalParams} from '../../types';
import style from './Modal.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import noposter from '../../img/no-image.png'


const posterUrl = 'https://image.tmdb.org/t/p/w342';

const Modal: FC = () => {
    const {page = '', id = ''} = useParams() as IModalParams;
    const dispatch = useAppDispatch();
    const storeFavorites = useAppSelector(favoritesSelector);
    const storeMovies = useAppSelector(moviesSelector);

    const movies = storeMovies.data;
    const npMovieId = storeMovies.npMovieId;
    const currentIndex = movies.results?.map(object => object.id).indexOf(+id);
    const currentMovie = movies.results?.[currentIndex];
    const date = new Date(currentMovie?.release_date);
    const lastMovie = movies.results?.length === currentIndex + 1 && movies.total_pages === +page;

    useEffect(() => {
        dispatch(fetchMoviesList(+page));
        dispatch(fetchNextPageMoviesId(+page+1))
    }, [page, dispatch]);

    useEffect(() => {
        document.title = currentMovie?.title;
    }, [currentMovie?.title]);

    const compare = useCallback((element: { id: number }) => element.id === +id, [id]);

    return currentMovie && (
        <div className={style.modal}
             style={{backgroundImage: `url(${posterUrl + currentMovie.backdrop_path})`}}>
            <div className={style.modal_container}>
                <div className={style.modal_nav}>
                    <Link to={`/${page}`}>
                        <button>
                            <i><FontAwesomeIcon icon={faChevronLeft}/></i>
                            <span>Back to list</span>
                        </button>
                    </Link>

                    {
                        (!lastMovie) &&
                        <Link
                            to={
                                (currentIndex < movies.results?.length - 1)
                                    ? `/${+page}/movie/${movies.results?.[currentIndex + 1]?.id}`
                                    : `/${+page + 1}/movie/${npMovieId}`
                            }>
                            <button>
                                <span>Next movie</span>
                                <i><FontAwesomeIcon icon={faChevronRight}/></i>
                            </button>
                        </Link>
                    }
                </div>
                <div className={style.modal_movie}>
                    <div className={style.modal_movie__poster}>
                        <img
                            src={!currentMovie.poster_path ? noposter : posterUrl + currentMovie.poster_path}
                            alt={currentMovie.title}
                        />
                    </div>
                    <div className={style.modal_movie__info}>
                        <div className={style.modal_movie__favorite}>
                            <button
                                className={style.button}
                                onClick={() => {
                                    storeFavorites.some(compare)
                                        ? dispatch(removeFavAction(+id))
                                        : dispatch(addFavAction(
                                            {
                                                id: +id,
                                                title: currentMovie.title,
                                                overview: currentMovie.overview,
                                                poster_path: currentMovie.poster_path
                                            }
                                        ));
                                }}>
                                {storeFavorites.some(compare) ? 'Unfavorite' : 'Add to favorite'}
                            </button>
                        </div>
                        <div className={style.modal_movie__title}>
                            {currentMovie.title}
                            <span>({date.toLocaleDateString('en-Us', {year: 'numeric'})})</span>
                        </div>
                        <div className={style.modal_movie__rate}>
                            <div
                                className="rate_score">Score:<span>{currentMovie.vote_average}</span>
                            </div>
                            <div className="rate_date">Release Date:
                                <span>
                                    {date.toLocaleDateString('en-Us', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        </div>
                        <div className={style.modal_movie__overview}>{currentMovie.overview}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;
