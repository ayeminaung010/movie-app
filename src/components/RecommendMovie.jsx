import React from 'react'

const RecommendMovie = ({recommend}) => {
  return (
    <div>
        <div className=" flex flex-col gap-3  w-64">
            <div className="">
                <img src={'https://image.tmdb.org/t/p/w500' + recommend?.backdrop_path} className='rounded-md' alt="" />
            </div>
            <div className=" flex flex-wrap justify-between">
                <h3>{recommend?.title.substring(0,25) + '....'}</h3>
                <span>{parseInt(recommend?.vote_average * 10) } %</span>
            </div>
        </div>
    </div>
  )
}

export default RecommendMovie