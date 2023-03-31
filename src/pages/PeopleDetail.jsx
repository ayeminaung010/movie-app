import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetMoviesCreditsQuery, useGetPeopleDetailQuery,useGetSocialIdsQuery } from '../features/people/PeopleApi';
import CreditMovie from '../components/CreditMovie';
import {BsInstagram,BsTwitter} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa'

const PeopleDetail = () => {
  const {id} = useParams();
  const {data:detailData,isLoading:detailLoading} = useGetPeopleDetailQuery(id);
  const {data: creditMoviesData,isLoading: creditMoviesLoading} = useGetMoviesCreditsQuery(id);
  const {data: socialData, isLoading: socialDataLoading} = useGetSocialIdsQuery(id);
  const creditMovies = creditMoviesData?.cast
  console.log(socialData);
  return (
    <div className=' container mx-auto'>
      <div className=" my-10">
        <div className="flex gap-8 flex-wrap ">
          <div className="lg:w-3/12 ">
            <div className="">
              <img className=' rounded-xl' src={'https://image.tmdb.org/t/p/w500' + detailData?.profile_path} alt="" />
            </div>
            <div className=" my-5">
              <div className=" text-3xl flex flex-wrap gap-5">
                <div className="">
                  {
                    socialData?.facebook_id !== null &&
                    <Link to={'https://www.facebook.com/'+ socialData?.facebook_id  }>
                      <FaFacebook/>
                    </Link>
                  }
                </div>
                <div className="">
                  {
                    socialData?.twitter_id !== null &&
                    <Link to={'https://twitter.com/'+ socialData?.twitter_id  }>
                      <BsTwitter/>
                    </Link>
                  }
                </div>
                <div className="">
                  {
                    socialData?.instagram_id !== null &&
                    <Link to={'https://www.instagram.com/'+ socialData?.instagram_id  }>
                      <BsInstagram/>
                    </Link>
                  }
                </div>
              </div>
              <div className=" my-5">
                <div className="">
                  <h5 className=' text-2xl font-semibold'>Personal Info</h5>
                </div>
                <div className=" my-2">
                  <p className=' font-semibold text-xl'>Known For</p>
                  <p className=' text-xl'>{detailData?.known_for_department}</p>
                </div>
                <div className=" my-5">
                  <p className=' font-semibold text-xl'>Known Credits</p>
                  <p className=' text-xl'>{creditMovies?.length}</p>
                </div>
                <div className=" my-5">
                  <p className=' font-semibold text-xl'>Gender</p>
                  <p className=' text-xl'>{detailData?.gender === 1 ? 'Female' : 'Male'}</p>
                </div>
                <div className=" my-5">
                  <p className=' font-semibold text-xl'>Birthday</p>
                  <p className=' text-xl'>{detailData?.birthday}</p>
                </div>
                <div className=" my-5">
                  <p className=' font-semibold text-xl'>Place of Birth</p>
                  <p className=' text-xl'>{detailData?.place_of_birth}</p>
                </div>
                <div className=" my-5">
                  <p className=' font-semibold text-xl'>Also Known As</p>
                  <div className=" flex flex-col gap-2">
                    {detailData?.also_known_as?.map(name => (
                        <p key={name} className=' text-xl'>{name}</p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:w-8/12">
            <div className="">
              <h3 className=' text-4xl font-bold'>{detailData?.name}</h3>
            </div>
            <div className=" my-8">
                <h5 className=' text-2xl font-semibold'>Biography</h5>
                <p className=' text-lg my-3'>{detailData?.biography}</p>
            </div>
            <div className="">
              <div className="">
                <h5 className=' text-2xl font-semibold' >Known For</h5>
              </div>
              <div className=" flex gap-5  overflow-scroll overflow-y-hidden">
                {creditMovies?.map(movie => (
                  <CreditMovie movie={movie} key={movie.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleDetail
