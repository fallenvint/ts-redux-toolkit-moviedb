export enum ActionTypes {
    ADD_FAVORITES = 'ADD_FAVORITES',
    REMOVE_FAVORITES = 'REMOVE_FAVORITES',
    FETCH_DATA = 'FETCH_DATA',
    GET_NEXT_MOVIE_ID = 'GET_NEXT_MOVIE_ID',
}

export interface IStore {
    favorites: IFavoriteMovieObject[];
    movies: IMoviesStoreState;
}

export interface IFavoriteMovieObject {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
}

export interface IDataMovieObject {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    poster_path: string | null;
    backdrop_path: string | null;
}

export interface IData {
    page: number;
    results: IDataMovieObject[];
    total_pages: number;
}

export interface IMoviesStoreState {
    data: IData;
    npMovieId: number;
}

export interface IListPoster {
    movieItem: IDataMovieObject;
    page: number;
}

export interface IModalParams {
    readonly page?: string;
    readonly id?: string;
}

export interface IPaginationProps {
    page: number;
    totalPage: number;
}

interface IAddFavoriteAction {
    type: ActionTypes.ADD_FAVORITES;
    payload: IFavoriteMovieObject;
}

interface IRemoveFavoriteAction {
    type: ActionTypes.REMOVE_FAVORITES;
    payload: number;
}

interface IFetchMovieAction {
    type: ActionTypes.FETCH_DATA;
    payload: IData;
}

interface IGetNextMovieIdAction {
    type: ActionTypes.GET_NEXT_MOVIE_ID;
    payload: number;
}

export type FavoriteActionType = IAddFavoriteAction | IRemoveFavoriteAction;
export type MovieActionType = IFetchMovieAction | IGetNextMovieIdAction;