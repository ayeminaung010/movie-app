import moment from 'moment';
import React from 'react'

const Reviews = ({review}) => {
    const reviewDate = moment(review?.created_at);
  return (
    <div>
        <div className=" flex  flex-wrap gap-5 shadow-xl lg:px-10 py-5 rounded-md">
            <div className="">
                <img src={review?.author_details?.avatar_path.substring(1)} className='rounded-full w-20' alt="" />
            </div>
            <div className=" flex flex-col gap-5 ">
              <div className="">
                <h1  className=' font-bold text-2xl'>A review by {review?.author}</h1>
                <div className="">
                  <p>Written by <span className=' font-semibold'>{review?.author}</span> on {reviewDate.format('MMM D , Y')}</p>
                </div>
              </div>
              <div className="">
                <span>{review?.content.substring(0,125) + '....'}</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews