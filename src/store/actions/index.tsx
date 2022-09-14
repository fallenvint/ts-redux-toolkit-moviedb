import {ActionTypes, FavoriteActionType, IData, IFavoriteMovieObject, MovieActionType} from '../../types';

export const addFavoriteAction = (payload: IFavoriteMovieObject): FavoriteActionType => ({
        type: ActionTypes.ADD_FAVORITES,
        payload
});

export const removeFavoriteAction = (payload: number): FavoriteActionType => {
    return {
        type: ActionTypes.REMOVE_FAVORITES,
        payload
    }
};

export const fetchMoviesAction = (payload: IData): MovieActionType => {
    return {
        type: ActionTypes.FETCH_DATA,
        payload
    }
};

export const fetchNextIdAction = (payload: number): MovieActionType => {
    return {
        type: ActionTypes.GET_NEXT_MOVIE_ID,
        payload
    }
};
