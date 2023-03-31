import React from 'react'
import { Link } from 'react-router-dom';

const CreditMovie = ({movie}) => {
  return (
    <div>
        <div className=" w-40 mt-8 cursor-pointer relative">
            <div className=" ">
              <Link to={`/movies/detail/${movie?.id}`} >
                  <img src={'https://image.tmdb.org/t/p/w500' + movie?.poster_path} className='  rounded-xl' alt="" />
              </Link>
            </div>
            <div className=" my-2">
                <Link to={`/movies/detail/${movie?.id}`} >
                    <p className=' text-lg  hover:underline'>{movie?.title}</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CreditMovie
