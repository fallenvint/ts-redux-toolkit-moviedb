import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices';
import {IFavoriteMovieObject} from '../types';

const favoriteList:IFavoriteMovieObject[] = JSON.parse(localStorage.getItem('ts-toolkit-fav-movies') || '[]');

const storage = configureStore({
    reducer: rootReducer,
    preloadedState: {
        favorites: favoriteList
    }
});

storage.subscribe(() => {
    localStorage.setItem('ts-toolkit-fav-movies', JSON.stringify(storage.getState().favorites))
});

export default storage;
