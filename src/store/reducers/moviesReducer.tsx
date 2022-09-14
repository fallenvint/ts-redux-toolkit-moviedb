import {ActionTypes, IMoviesStoreState, MovieActionType} from '../../types';

const initialState: IMoviesStoreState = {
    data: {
        page: 1,
        results: [],
        total_pages: 1
    },
    npMovieId: 1
};

export const moviesReducer = (state = initialState, action: MovieActionType): IMoviesStoreState => {
    switch (action.type) {
        case ActionTypes.FETCH_DATA:
            return {
                ...state,
                data: action.payload
            };
        case ActionTypes.GET_NEXT_MOVIE_ID:
            return {
                ...state,
                npMovieId: action.payload
            };
        default:
            return state;
    }
};
