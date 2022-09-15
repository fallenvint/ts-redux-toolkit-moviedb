import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IFetchData} from '../../types';

export const fetchMoviesList = createAsyncThunk(
    'movieDate',
    async (pageNum: number) => {
        const response = await axios.get<IFetchData>(`https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${pageNum}`)
        return response.data;
    }
);

export const fetchNextPageMoviesId = createAsyncThunk(
    'npMovieId',
    async (pageNum: number) => {
        const response = await axios.get<IFetchData>(`https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${pageNum}`)
        return response.data.results?.[0].id;
    }
);
