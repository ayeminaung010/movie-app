import React, { useEffect } from 'react'
import { useGetGenresQuery } from '../features/category/genreCategoryApi';
import PopularMovie from './PopularMovie';
import { motion } from "framer-motion";

const Filter = ({filter,setFilter,activeGenre,setActiveGenre,popularMovies}) => {
    const {data,isLoading} = useGetGenresQuery();
    const genres = data?.genres


    useEffect(() => {
        if(activeGenre === 0 ){
            setFilter(popularMovies);
            return;
        }
        const filterMovies = popularMovies.filter(movie => movie.genre_ids.includes(activeGenre));
        setFilter(filterMovies);
    },[activeGenre]);
    
    return (
        <div>
            <motion.div layoutId="underline" className=" overflow-scroll overflow-y-hidden  flex ">
                <button onClick={() => setActiveGenre(0)} className=" bg-btnBg px-3 py-2 rounded-full text-btnText  hover:bg-headLineColor">
                    All
                </button>
                {genres?.map(genre => (
                    <button onClick={() => setActiveGenre(genre.id)} key={genre.id} className=" bg-btnBg px-3  py-2 rounded-full text-btnText  hover:bg-headLineColor">
                        {genre?.name}
                    </button>
                ))}
            </motion.div>
        </div>
    )
}

export default Filter