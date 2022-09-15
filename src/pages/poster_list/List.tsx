import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMoviesList} from '../../store/actions/asyncActions';
import {moviesSelector} from '../../store/selectors';
import ListPoster from './ListPoster';
import Pagination from '../../components/pagination/Pagination';
import style from './List.module.css';

const List: FC = () => {
    const {page} = useParams();
    const dispatch: any = useDispatch();
    const storeMovies = useSelector(moviesSelector);
    const pageNum = !page ? 1 : +page;

    useEffect(() => {
        dispatch(fetchMoviesList(pageNum));
    }, [pageNum, dispatch]);

    useEffect(() => {
        document.title = 'Movie DB';
    }, []);

    return (
        <div>
            <div className="page-title">Latest Releases</div>
            <div className={`${style.posters} page-content`}>
                {
                    storeMovies.data.results?.map(movie => {
                        return (
                            <ListPoster
                                key={movie.id}
                                movieItem={movie}
                                page={pageNum}/>
                        );
                    })
                }
            </div>
            <Pagination page={pageNum} totalPage={storeMovies.data.total_pages}/>
        </div>
    )
};

export default List;
