import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchMoviesList, fetchNextPageMoviesId} from '../actions/asyncActions';
import {IFetchData, IMoviesStoreState} from '../../types';

const initialState: IMoviesStoreState = {
    data: {
        page: 1,
        results: [],
        total_pages: 1
    },
    npMovieId: 1
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMoviesList.fulfilled.type]: (state, action: PayloadAction<IFetchData>) => {
            state.data = action.payload;
        },
        [fetchNextPageMoviesId.fulfilled.type]: (state, action: PayloadAction<number>) => {
            state.npMovieId = action.payload;
        },
    }
});

export const movieReducer = movieSlice.reducer;
