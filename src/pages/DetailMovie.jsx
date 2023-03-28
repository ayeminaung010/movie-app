import moment from 'moment';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetCastsQuery, useGetMovieDetailQuery, useGetReviewsQuery } from '../features/popular/MoviePopularApi';
import {BsListUl,BsFillBookmarkFill,BsFillPlayFill} from 'react-icons/bs'
import {AiFillHeart,AiFillStar} from 'react-icons/ai'
import TopCast from '../components/TopCast';
import SeeMoreCast from '../components/SeeMoreCast';
import Reviews from '../components/Reviews';

const DetailMovie = () => {
  const { id } = useParams();

  const { data : movieData, isLoading : movieLoading } = useGetMovieDetailQuery(id);
  const {data: castData,isLoading : castLoading} = useGetCastsQuery(id);
  const {data: reviewData ,isLoading: reviewLoading} = useGetReviewsQuery(id);
  const casts = castData?.cast
  const crews = castData?.crew
  const reviews  = reviewData?.results

  const backgroundStyle = {
    position: 'relative',
  };

  const pseudoElementStyle = {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(#0398D2, #457f1d1d),url('https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}')` ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
    filter: "grayscale(40%)"
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '4rem',
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '300px',
    height: '500px',
    borderRadius: '1rem',
    marginRight: '2rem',
  };
  const releaseDate = moment(movieData?.release_date);
  

  return (
    <div className="">
      <div style={backgroundStyle}>
        <div style={pseudoElementStyle}></div>
        <div style={contentStyle} className='flex justify-center w-full'>
          <img
            src={'https://image.tmdb.org/t/p/w500' + movieData?.poster_path}
            style={imageStyle}
            alt=""
          />
        
          <div className='w-8/12  text-background  '>
            <div className="">
              <h1 className=' text-5xl font-bold'>{movieData?.original_title + ' ' + '(' + releaseDate.format('Y') + ')'}</h1>
              <div className=" text-xl font-medium space-x-2">
                <span>{releaseDate.format('MM/D/Y')}</span>
                {
                  movieData?.production_countries.length === 1 ? (
                    <span>({movieData?.production_countries.map(country => country.iso_3166_1)})</span>
                  ): (
                    <span>({movieData?.production_countries.map((country,index) => country.iso_3166_1 + ',')})</span>
                  )
                }
                <span className=' font-bold text-3xl'>.</span>
                {
                  movieData?.genres.length === 1 ? (
                    <span>{movieData?.genres.map(genre => (genre.name) )}</span>
                  ): (
                    <span>{movieData?.genres.map(genre => (genre.name) + ',' )}</span>
                  )
                }
                <span className=' font-bold text-3xl'>.</span>
                <span>{Math.floor(movieData?.runtime / 60) + 'h' + ' ' + movieData?.runtime % 60 + 'm'}</span>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex flex-wrap gap-4 mt-5">
                <button className=' bg-btnBg px-4 py-4 rounded-full text-xl'><BsListUl/></button>
                <button className=' bg-btnBg px-4 py-4 rounded-full text-xl'><AiFillHeart/></button>
                <button className=' bg-btnBg px-4 py-4 rounded-full text-xl'><BsFillBookmarkFill/></button>
                <button className=' bg-btnBg px-4 py-4 rounded-full text-xl'><AiFillStar/></button>
              </div>
              <div className="">
                <div className="flex flex-wrap gap-3 items-center cursor-pointer py-4 px-4 hover:opacity-50  text-xl">
                  <BsFillPlayFill className=' text-3xl'/>
                  <p>Play Trailer</p>
                </div>
              </div>
            </div>
            <div className=" mt-5">
              <span className=' font-semibold text-textColor  text-xl'><i>{movieData?.tagline}</i></span>
            </div>
            <div className=" mt-5">
              <div className="">
                <h5 className=' font-semibold text-2xl'>Overview</h5>
                <p className=' text-lg'>{movieData?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div className=" mt-10">
        <div className=" container mx-auto ">
          <div className="">
            <h1 className=' font-semibold text-2xl'>Top Billed Cast</h1>
          </div>
          <div className="flex  gap-10 w-[1280px] overflow-scroll overflow-y-hidden  ">
              {casts?.map( (cast,index) => (
                  index <= 8 && <TopCast key={cast.id} cast={cast}/> 
              ))}
              <SeeMoreCast/>
          </div>
          <div className=" mt-10">
            <Link>
                <p className=' text-xl font-semibold hover:text-textColor'>Full Cast & Crew</p>
            </Link>
          </div>
          <div className="my-5">
            <hr className=' w-11/12 text-textColor' />
          </div>
          <div className="mb-3 flex gap-5 items-center">
            <div className="">
              <h1 className=' font-semibold text-2xl'>Social</h1>
            </div>
            <div className="">
              <p className=' border-b-4  text-xl font-medium'>Reviews {reviews?.length}</p>
            </div>
          </div>
          <div className="mb-5">
              {
                reviews?.map((review,index) => (
                  index <1 && <Reviews key={review.id} review={review}/>
                ))
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
