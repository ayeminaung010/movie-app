import React from 'react'

const TopCast = ({cast}) => {
  return (
    <div>
      <div className=" w-44  h-[350px] my-8 cursor-pointer shadow-md  rounded-xl">
          <div className="">
            <img src={'https://image.tmdb.org/t/p/w500' + cast?.profile_path} className='  rounded-t-xl' alt="" />
          </div>
          <div className="px-3 my-3 ">
              <p className=' font-semibold text-lg hover:text-textColor'>{cast?.name}</p>
              <p className=' text-textColor '>{cast?.character}</p>
          </div>
      </div>
    </div>
  )
}

export default TopCast