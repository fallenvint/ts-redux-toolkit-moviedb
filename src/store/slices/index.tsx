import {combineReducers} from 'redux';
import {favoriteReducer} from './FavoriteSlice';
import {movieReducer} from './MovieSlice';

export default combineReducers({
    favorites: favoriteReducer,
    movies: movieReducer
});
