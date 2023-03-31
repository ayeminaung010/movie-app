import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PersonCard from './PersonCard';

const PaginationCard = ({personData,handleClick}) => {

  return (
    <>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handleClick}
          pageRangeDisplayed={5}
          pageCount={personData?.total_pages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className=' flex flex-wrap gap-5 items-center justify-center my-10 text-xl'
          activeClassName={' border-2 px-2'}
          previousClassName={'bg-btnBg text-background px-3 py-2'}
          nextClassName={'bg-btnBg text-background px-3 py-2'}
        />
    </>
  )
}

export default PaginationCard