import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-headLineColor py-4'>
        <div className="container mx-auto">
            <div className=" flex justify-between mx-20">
                <div className=" flex justify-center gap-3">
                    <Link to={'/'}>
                        <img src="../../public/tmdb.svg" className=' w-52' alt="" />
                    </Link>
                    <div className="">
                        <ul className=' flex  gap-5 font-medium  text-background'>
                            <li>Home</li>
                            <Link to={'/movies'}>
                                <li>Movies</li>
                            </Link>
                            <li>TV Shows</li>
                            <li>People</li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <ul className=' flex  gap-5 font-medium  text-background'>
                            <li  className=' cursor-pointer hover:text-textColor'>
                                <AiOutlineSearch className=' text-2xl'/>
                            </li>
                            <li  className=' cursor-pointer hover:text-textColor'>Sign In</li>
                            <li  className=' cursor-pointer hover:text-textColor'>Register</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar