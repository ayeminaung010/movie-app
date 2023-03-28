import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

const SeeMoreCast = () => {
  return (
    <div>
        <div className=" w-44  h-[350px] my-8 flex items-center justify-center shadow-md  rounded-xl">
            <Link>
                <p className=' text-xl flex items-center gap-4 hover:text-textColor'>View More <AiOutlineArrowRight/></p>
            </Link>
        </div>
    </div>
  )
}

export default SeeMoreCast