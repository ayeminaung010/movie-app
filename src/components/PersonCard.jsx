import React from 'react'
import profile_avatar  from '../../public/personal_avatar.png'
import { Link } from 'react-router-dom'

const PersonCard = ({person}) => {
    const knownFor = person?.known_for
    return (
        <div className="">
            <Link to={`/person/detail/${person?.id}`}>
                <div className=' w-64 h-[500px] rounded shadow-md '>
                    <div className="">
                        {person?.profile_path  !== null ? (
                            <img src={'https://image.tmdb.org/t/p/w500'+ person?.profile_path} className=' w-46 ' alt={person?.name} />
                        ): (
                            <img src={profile_avatar} className=' w-46 pb-24 pt-5'  alt={person?.name}/>
                        )}
                    </div>
                    <div className=" px-3 py-4">
                        <h4 className=' text-xl font-semibold'>{person?.name}</h4>
                        {knownFor?.map(item => (
                            <span key={item.id} className=' text-textColor'>{item.original_name ? item.original_name : item.original_title},</span>
                        ) )}
                    </div>
                </div>
            </Link>
        </div>
        
    )
}

export default PersonCard