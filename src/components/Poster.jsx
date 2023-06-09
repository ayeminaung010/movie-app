import React from 'react'
import moment from 'moment';
import {BsThreeDots} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';

const Poster = ({adult,id,backdrop_path,name,first_air_date,title,overview,popularity,poster_path,release_date,vote_average,vote_count,original_title,original_language,genre_ids}) => {
    const originalDate = moment(release_date ? release_date : first_air_date)
    const percentage = parseInt(vote_average * 10);
  return (
    <div>
       <div className=" w-44 mt-8 cursor-pointer relative">
            <div className=" relative">
              <Link to={`/movies/detail/${id}`}>
                  <img src={'https://image.tmdb.org/t/p/w500' + poster_path} className='  rounded-xl' alt="" />
              </Link>
              <div className=" w-12 absolute -bottom-5 right-2">
                <ProgressBar percentage={percentage}/>
              </div>
            </div>
            <div className=" mt-5">
                <Link to={`/movies/detail/${id}`}>
                    <p className='font-semibold text-xl  hover:underline'>{title? title : name}</p>
                </Link>
                <p className=' text-textColor text-lg'>{ originalDate.format('MMM DD,YYYY')}</p>
            </div>
            <div className="absolute top-3 right-3 rounded-full text-textColor bg-detailBtn hover:bg-primaryBtn">
                <BsThreeDots className=' text-2xl '/>
            </div>
            
        </div>
    </div>
  )
}

export default Poster