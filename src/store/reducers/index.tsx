import {combineReducers} from 'redux';
import {favoritesReducer} from './favoritesReducer';
import {moviesReducer} from './moviesReducer';

export default combineReducers({
    favorites: favoritesReducer,
    movies: moviesReducer
});
