import React from 'react'
import moment from 'moment';

const Poster = ({adult,backdrop_path,name,first_air_date,title,overview,popularity,poster_path,release_date,vote_average,vote_count,original_title,original_language,genre_ids}) => {
    const originalDate = moment(release_date ? release_date : first_air_date)
  return (
    <div>
        <div className=" w-44 mt-8">
            <div className="">
                <img src={'https://image.tmdb.org/t/p/w500' + poster_path} className='  rounded-xl' alt="" />
            </div>
            <div className=" mt-3">
                <p className='font-semibold text-xl '>{title? title : name}</p>
                <p className=' text-textColor text-lg'>{ originalDate.format('MMM DD,YYYY')}</p>
            </div>
        </div>
    </div>
  )
}

export default Poster