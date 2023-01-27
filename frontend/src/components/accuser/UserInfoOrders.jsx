import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom';

const UserInfoOrders = ({userOrders}) => {

    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 6;
    const pagesVisited = pageNumber * productsPerPage;

    const pageCount = Math.ceil(userOrders.length / productsPerPage);

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

  return (
    <>

        {userOrders.slice(pagesVisited, pagesVisited + productsPerPage).map((item) => (

        <h4 key={item._id}>Order No: {(item._id).substring(0, 10)}... <Link className='linkOrder' to={`/userorder/${item._id}`}><FontAwesomeIcon icon={faEye} /></Link></h4>

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

export default UserInfoOrders
