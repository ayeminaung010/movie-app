import React from 'react'

const Reviews = ({review}) => {
    console.log(review);
  return (
    <div>
        <div className="">
            <div className="">
                <img src={review?.author_details?.avatar_path.substring(1)} className='rounded-full' alt="" />
            </div>
            <div className="">

            </div>
        </div>
    </div>
  )
}

export default Reviews