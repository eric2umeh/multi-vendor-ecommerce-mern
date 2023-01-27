import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import SellerProductInfo from './SellerProductInfo'

const SellerProduct = ({product}) => {

    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 12;
    const pagesVisited = pageNumber * productsPerPage;

    const pageCount = Math.ceil(product.length / productsPerPage);

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

  return (
    <>
        <div className="filter-cards">
            {product.slice(pagesVisited, pagesVisited + productsPerPage).map((pro) => (
                <SellerProductInfo key={pro._id} pro={pro} />
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

export default SellerProduct
