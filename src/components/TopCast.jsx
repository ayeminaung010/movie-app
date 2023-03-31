import React from 'react'
import profile_avatar  from '../../public/personal_avatar.png'

const TopCast = ({cast}) => {
  return (
    <div>
      <div className=" w-44  h-[350px] my-8 cursor-pointer shadow-md  rounded-xl">
          <div className="  ">
            <div className=" ">
              {
                cast?.profile_path !== null ? (
                  <img src={'https://image.tmdb.org/t/p/w500' + cast?.profile_path} className='  rounded-t-xl' alt="" />
                ) : (
                  <img src={profile_avatar} className=' py-10 ' alt=""/>
                )
              }
            </div>
          </div>
          <div className="px-3 my-3">
              <p className=' font-semibold text-lg hover:text-textColor'>{cast?.name}</p>
              <p className=' text-textColor '>{cast?.character}</p>
          </div>
      </div>
    </div>
  )
}

export default TopCast