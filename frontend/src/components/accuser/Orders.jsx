import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

const Orders = ({orders}) => {

    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 6;
    const pagesVisited = pageNumber * productsPerPage;

    const pageCount = Math.ceil(orders.length / productsPerPage);

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

  return (
    <>
        {orders.slice(pagesVisited, pagesVisited + productsPerPage).map((order) => (

            <h4 key={order._id}>Order No: {(order._id).substring(0, 10)}... <Link className='linkOrder' to={`/order/${order._id}`}><FontAwesomeIcon icon={faEye} /></Link></h4>

        ))}
        
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

export default Orders
