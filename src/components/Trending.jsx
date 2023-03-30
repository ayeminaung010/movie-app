import React from 'react'
import { useGetTrendingMoviesQuery } from '../features/popular/MoviePopularApi'
import Poster from './Poster';

const Trending = () => {
    const {data,isLoading} = useGetTrendingMoviesQuery();
    const trendingMovies = data?.results
   
  return (
    <section>
        <div className=" mt-10">
            <div className=" text-3xl ml-0 xl:ml-20  font-semibold">
                <h1>Trending</h1>
            </div>
            <div className="flex justify-center   ">
                <div className="flex  gap-10 w-[1280px] overflow-scroll overflow-y-hidden ">
                    {
                        trendingMovies?.map((movie) => (
                            <Poster key={movie.id} {...movie}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trending