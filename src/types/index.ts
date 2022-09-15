export interface IStore {
    favorites: IFavoriteMovieObject[];
    movies: IMoviesStoreState;
}

export interface IFetchData {
    page: number;
    results: IDataMovieObject[];
    total_pages: number;
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

export interface IMoviesStoreState {
    data: IFetchData;
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