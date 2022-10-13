import {combineReducers} from 'redux';
import {movieReducer} from './movieSlice';
import {favoriteReducer} from './favoriteSlice';

export default combineReducers({
    favorites: favoriteReducer,
    movies: movieReducer
});
