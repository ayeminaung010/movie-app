import React from 'react'
import { useGetPopularPeopleQuery } from '../features/people/PeopleApi'
import PersonCard from '../components/PersonCard';
import PaginationCard from '../components/PaginationCard';
import { useState } from 'react';

const People = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const {data:personData,isLoading: personLoading} = useGetPopularPeopleQuery(currentPage);
    const persons = personData?.results
    const handleClick = (event) => {
        const selectPage = event.selected + 1;
        setCurrentPage(selectPage);
        window.scrollTo(0,0);
    }
  return (
    <div>
        <div className="container mx-auto">
            <div className="">
                <div className=" ml-20 my-10">
                    <h1 className=' font-bold text-3xl'>Popular People</h1>
                </div>
                <div className=" flex  flex-wrap gap-10 justify-center">
                    {
                        persons?.map( person => (
                            <PersonCard key={person.id} person={person}/>
                        ))
                    }
                </div>
            </div>
            <div className="  ">
                <PaginationCard personData={personData} handleClick={handleClick}/>
            </div>
        </div>
        
    </div>
  )
}

export default People