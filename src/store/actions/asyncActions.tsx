import axios from 'axios';
import {Dispatch} from 'redux';
import {fetchMoviesAction, fetchNextIdAction} from './index';
import {MovieActionType} from '../../types';

const moviesJSON = async (pageNum: number) => {
    return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${pageNum}`);
};

export const asyncFetchDataAction = (page: number) => {
    return async (dispatch: Dispatch<MovieActionType>) => {
        const movie = await moviesJSON(page);
        const nPage = await moviesJSON(page+1);

        dispatch(fetchMoviesAction(movie.data));
        dispatch(fetchNextIdAction(nPage.data.results?.[0].id));
    }
};
