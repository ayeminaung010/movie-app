import React from 'react'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <section className='landing-section'>
        <div className="">
            <div className=" flex justify-center">
                {/* <img src="../../public/hero-section-bg.jpg" className=' w-10/12 h-96 from-headLineColor-500' alt="" /> */}
            </div>
            <div className=" text-background">
                <p className=' text-3xl'>Welcome</p>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
        </div>
    </section>
  )
}

export default LandingPage