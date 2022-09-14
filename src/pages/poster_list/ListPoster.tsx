import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {IListPoster} from '../../types'
import noposter from '../../img/no-image.png'
import style from './List.module.css';

const posterUrl = 'https://image.tmdb.org/t/p/w342';

const ListPoster: FC<IListPoster> = ({movieItem, page}) => {
    return (
        <div className={style.poster} key={movieItem.id}>
            <Link to={`/${page}/movie/${movieItem.id}`}>
                <img
                    src={!movieItem.poster_path ? noposter : posterUrl + movieItem.poster_path}
                    alt={movieItem.title}
                    title={movieItem.title}
                />
            </Link>
        </div>
    )
};

export default ListPoster;
