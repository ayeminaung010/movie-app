import React from 'react'
import { useGetGenresQuery } from '../features/category/genreCategoryApi';

const Filter = () => {
    const {data,isLoading} = useGetGenresQuery();
    const genres = data?.genres
    console.log(genres);

    return (
        <div>
            {genres?.map(genre => (
                <button key={genre.id} className=' bg-black text-green-600 py-2 px-5 rounded'>
                    {genre?.name}
                </button>
            ))}
        </div>
    )
}

export default Filter