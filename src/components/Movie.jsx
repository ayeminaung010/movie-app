import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGetPopularMoviesQuery } from '../features/popular/MoviePopularApi'
import { addPopular } from '../services/MovieSlice';
import Filter from './Filter';
import PopularMovie from './PopularMovie';
import { motion } from "framer-motion";


const Movie = () => {
    const [filter,setFilter] = useState();
    const [activeGenre, setActiveGenre] = useState(0);
    const {data,isLoading} = useGetPopularMoviesQuery();
    const dispatch = useDispatch();
    const popularMovies  = useSelector(state => state.movie.popularMovie);
    const results = data?.results;

    useEffect(() => {
      dispatch(addPopular(results));
      setFilter(results);
    },[data])
    
  return (
    <div className="">
      <div className=" flex justify-center mt-10">
        <Filter filter={filter} popularMovies={popularMovies} setFilter={setFilter} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      </div>
      <div className="">
        {
          (filter?.length !== 0) ? (
            <motion.div layout animate={{ opacity: 1 }} className='flex flex-wrap justify-center gap-10 mt-10'>
              {filter?.map((movie) => (
                <PopularMovie key={movie.id} {...movie}   />
              ))}
            </motion.div>
          ) : (
            <div className=" font-bold text-3xl text-center mt-10">
              There is no movie
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Movie