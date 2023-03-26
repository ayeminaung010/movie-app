import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGetPopularMoviesQuery } from '../features/popular/MoviePopularApi'
import { addPopular } from '../services/MovieSlice';
import Filter from './Filter';
import PopularMovie from './PopularMovie';

const Movie = () => {
    const {data,isLoading} = useGetPopularMoviesQuery();
    const dispatch = useDispatch();
    const popularMovies  = useSelector(state => state.movie.popularMovie);
    const results = data?.results;
    console.log(popularMovies);

    useEffect(() => {
      dispatch(addPopular(results));
    },[data])
    
  return (
    <div className="">
      <div className="ml-44">
        <Filter />
      </div>
      <div className='flex flex-wrap justify-center gap-10 mt-20'>
        {popularMovies?.map((movie) => (
          <PopularMovie key={movie.id} {...movie}  />
        ))}
      </div>
    </div>
  )
}

export default Movie