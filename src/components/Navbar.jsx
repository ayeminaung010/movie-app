import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../public/tmdb.svg'
import {BiMenuAltLeft} from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
    const [menu,setMenu] = useState(false);
    const menuHandleClick = () => {
        if(menu === false) setMenu(true);
        else setMenu(false);
    }
  return (
    <div className=' bg-headLineColor py-5'>
        <div className="container mx-auto">
            <div className=" flex justify-between items-center lg:mx-20">
                <div className=" flex justify-center gap-3">
                    <Link to={'/'}>
                        <img src={logo} className=' lg:w-52 w-44' alt="" />
                    </Link>
                    {/* for laptops  */}
                    <div className=" hidden lg:block ">
                        <ul className=' flex text-lg  gap-5 font-medium  text-background'>
                            <Link to={'/'}>
                                <li>Home</li>
                            </Link>
                            <Link to={'/movies'}>
                                <li>Movies</li>
                            </Link>
                            <li>TV Shows</li>
                            <Link to={'/person'}>
                                <li>People</li>
                            </Link>
                        </ul>
                    </div>
                    
                </div>
                <div className="hidden lg:block">
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
                <div className="hamburger-menu block lg:hidden">
                    <div onClick={menuHandleClick} className="px-3 py-3 rounded-full  text-background cursor-pointer">
                        <BiMenuAltLeft className=' text-3xl   '/>
                    </div>
                </div>
                
            </div>
            {/* for mobile  */}
            {
                menu !== false && (
                    <div className={`pt-5  transition-all duration-500  lg:hidden`}>
                        <ul className=' flex flex-col text-lg  gap-5 font-medium  text-background'>
                            <Link to={'/'}>
                                <li>Home</li>
                            </Link>
                            <Link to={'/movies'}>
                                <li>Movies</li>
                            </Link>
                            <li>TV Shows</li>
                            <Link to={'/person'}>
                                <li>People</li>
                            </Link>
                        </ul>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Navbar