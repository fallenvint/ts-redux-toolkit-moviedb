import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {IFavoriteMovieObject} from '../../types';
import style from './Favorite.module.css';
import noposter from '../../img/no-image.png';
import {favoritesSelector} from '../../store/selectors';
import {removeFavAction} from '../../store/slices/favoriteSlice';


const posterUrl = 'https://image.tmdb.org/t/p/w342';

const Favorite: FC = () => {
    const storeFavorite = useAppSelector(favoritesSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.title = 'My favorites';
    }, []);

    if (!!storeFavorite.length) {
        return (
            <div>
                <div className="page-title">My favorite</div>
                <div className={`${style.favorites} page-content`}>
                    {
                        storeFavorite.map((movie: IFavoriteMovieObject) => {
                            return (
                                <div className={style.favorite} key={movie.id}>
                                    <div className={style.favorite_movie}>
                                        <div className={style.favorite_movie__poster}>
                                            <img
                                                src={!movie.poster_path ? noposter : posterUrl + movie.poster_path}
                                                alt={movie.title}
                                                title={movie.title}
                                            />
                                        </div>
                                        <div className={style.favorite_movie__info}>
                                            <div>
                                                <button
                                                    className={style.button}
                                                    onClick={() => dispatch(removeFavAction(movie.id))}
                                                >
                                                    Unfavorite
                                                </button>
                                            </div>
                                            <div className={style.favorite_movie__title}>{movie.title}</div>
                                            <div className={style.favorite_movie__overview}>{movie.overview}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="page-title">My favorite</div>
                <div className="empty">Favorite movies list is empty!</div>
            </div>
        )
    }
};

export default Favorite;
