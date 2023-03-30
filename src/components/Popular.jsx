import React from 'react'
import { useGetPopularMoviesQuery } from '../features/popular/MoviePopularApi';
import Poster from './Poster';

const Popular = () => {
    const {data,isLoading} = useGetPopularMoviesQuery();
    const popularMovies = data?.results
    console.log(popularMovies);
  return (
    <section>
        <div className=" mt-10">
            <div className=" text-3xl ml-0 xl:ml-20  font-semibold">
                <h1>Popular Movies</h1>
            </div>
            <div className="flex justify-center   ">
                <div className="flex  gap-10 w-[1280px] overflow-scroll overflow-y-hidden ">
                    {
                        popularMovies?.map((movie) => (
                            <Poster key={movie.id} {...movie}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Popular