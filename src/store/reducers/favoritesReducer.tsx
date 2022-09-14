import {ActionTypes, FavoriteActionType, IFavoriteMovieObject} from '../../types';

export const favoritesReducer = (state:Array<IFavoriteMovieObject> = [], action: FavoriteActionType):Array<IFavoriteMovieObject> => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITES:
            return [...[action.payload], ...state];
        case ActionTypes.REMOVE_FAVORITES:
            return [...state.filter((item) => item.id !== action.payload)];
        default:
            return state;
    }
};
