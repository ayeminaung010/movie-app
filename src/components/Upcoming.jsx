import React from 'react'
import { useGetUpcomingMoviesQuery } from '../features/popular/MoviePopularApi'
import Poster from './Poster';

const Upcoming = () => {
    const {data,isLoading} = useGetUpcomingMoviesQuery();
    const upcomingMovies = data?.results
  return (
    <section>
        <div className=" mt-10">
            <div className=" text-3xl ml-0 xl:ml-20 font-semibold">
                <h1>Upcoming Movies</h1>
            </div>
            <div className="flex justify-center   ">
                <div className="flex  gap-10 w-[1280px] overflow-scroll overflow-y-hidden ">
                    {
                        upcomingMovies?.map((movie) => (
                            <Poster key={movie.id} {...movie}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Upcoming