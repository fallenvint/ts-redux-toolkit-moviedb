import {IStore} from '../types';

export const favoritesSelector = (state : IStore) => state.favorites;
export const moviesSelector = (state : IStore) => state.movies;