import React from 'react'
import Popular from '../components/Popular'
import Trending from '../components/Trending'
import Upcoming from '../components/Upcoming'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <div className=" container mx-auto">
      <section className='landing-section'>
          <div className="">
              <div className=" flex justify-center">
                  {/* <img src="../../public/hero-section-bg.jpg" className=' w-10/12 h-96 from-headLineColor-500' alt="" /> */}
              </div>
              <div className=" text-background   mt-28">
                  <div className=" mx-16">
                      <p className=' text-6xl font-bold'>Welcome .</p>
                      <p className=' text-4xl font-semibold tracking-wider'>Millions of movies, TV shows and people to discover. Explore now.</p>
                  </div>
              </div>
              <div className=" flex justify-center mt-10">
                  <div className=" w-11/12 relative">
                    <input type="text" className=' w-full outline-none py-3 px-5 rounded-full text-xl' placeholder='Search for a movie, tv show, person......' />
                    <button className='right-0 absolute px-8 py-3 h-full rounded-full text-background text-lg font-bold btn-color hover:text-btnBg '>Search</button>
                  </div>
              </div>
          </div>
      </section>
      <Trending />
      <Upcoming/>
      <Popular/>
    </div>
  )
}

export default LandingPage