import React from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import SellFilterInfo from './SellFilterInfo'

const SellFilter = ({seller}) => {


    const [pageNumber, setPageNumber] = useState(0);
    const sellersPerPage = 12;
    const pagesVisited = pageNumber * sellersPerPage;

    const pageCount = Math.ceil(seller.length / sellersPerPage);

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

  return (
    <>
        <div className="sell-fill-cards">
            {seller.slice(pagesVisited, pagesVisited + sellersPerPage).map((user) => (
                <SellFilterInfo key={user._id} user={user} />
            ))}
        </div>
        <ReactPaginate className='filter-pagination' 
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            pageClassName={"pagi-item"}
            pageLinkClassName={"pagi-link"}
            activeClassName={"pagi-active"}
            activeLinkClassName={"pagi-active-link"}
            previousClassName={"pagi-item"}
            previousLinkClassName={"pagi-link"}
            nextClassName={"pagi-item"}
            nextLinkClassName={"pagi-link"}
            breakClassName={"pagi-item"}
            breakLinkClassName={"pagi-link"}
            disabledClassName={"disabledPagi"}
        />
    </>
  )
}

export default SellFilter
