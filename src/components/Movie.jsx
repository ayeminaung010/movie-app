import React from 'react'
import { useGetPopularMoviesQuery } from '../features/popular/MoviePopularApi'

const Movie = () => {
    const {data} = useGetPopularMoviesQuery();
    console.log(data);
  return (
    <div>Movie</div>
  )
}

export default Movie