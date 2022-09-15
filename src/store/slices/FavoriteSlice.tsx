import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFavoriteMovieObject} from '../../types';

const initialState: IFavoriteMovieObject[] = [];

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavAction(state:IFavoriteMovieObject[], action: PayloadAction<IFavoriteMovieObject>) {
            return [...[action.payload], ...state];
        },
        removeFavAction(state:IFavoriteMovieObject[], action: PayloadAction<number>) {
            return [...state.filter((item) => item.id !== action.payload)]
        }
    }
});

export const favoriteReducer = favoriteSlice.reducer;
export const {addFavAction, removeFavAction} = favoriteSlice.actions;
