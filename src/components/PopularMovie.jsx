import React from 'react'
import Filter from './Filter'
import { motion } from "framer-motion";

const PopularMovie = ({adult,backdrop_path,title,overview,popularity,poster_path,release_date,vote_average,vote_count,original_title,original_language,genre_ids}) => {
    
    return (
        <div className=''>
            <motion.div layout animate={{ x: [0, 100, 0] }}    transition={{ ease: "easeOut", duration: 0.5 }} className=''>
                <p className=' font-medium text-2xl'>{title}</p>
                <img className='' src={'https://image.tmdb.org/t/p/w500' + backdrop_path} alt="" />
            </motion.div>
        </div>
    )
}

export default PopularMovie