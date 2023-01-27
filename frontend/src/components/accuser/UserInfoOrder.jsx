import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const UserInfoOrder = () => {

  const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

  const userId = userInfo && userInfo._id;

  console.log(userId);

  const params = useParams();
  const {id} = params;

  const navigate = useNavigate();

  const [order, setOrder] = useState([]);

  useEffect(() => {

    const fetchOrder = async () => {

      try {

        const {data} = await axios.get(`/api/orders/${id}`);
        
        console.log(data);
        setOrder(data);
  
        
  
      } catch(err) {
          alert("Order not found!");
      }

    }

    if(!userInfo) {

      return navigate('/');

    }

    fetchOrder();

  }, [id, navigate, userInfo]);

  return (
    <div className='orderContainer'>
      <Link className='back' to="/account"><FontAwesomeIcon icon={faArrowLeft} /> Go Back</Link>
      <div className="orderRow">
        <h3>My Order No: {order._id}</h3>
      </div>
      <div className="orderRow products">
        <div className="orderCol">
          <div className="cards">
            {/* filtered product and show only my products if the are ordered */}
            {order.orderItems?.filter(item => {
              return item.sellerId === userId
            })?.map((item) => (
              
              <div className="filter-card" key={item._id}>
                <div className="card-header">
                    <img src={item.image} alt={item.name} />
                    <Link to={`../seller/${item.sellerId}`}><img className='card-sellers' src={item.sellerImage} alt={item.seller} /></Link>
                </div>
                <div className="card-body">
                    <Link to={`../${item.slug}`}>{item.name} <FontAwesomeIcon icon={faEye} /></Link>
                    <span className="price">${(item.price).toFixed(2)}/kg</span>
                </div>
            </div>
            ))}
          </div>
        </div>
        <div className="orderCol">
          <div className="infoGroups">
            <div className="info-group">
              <span>Name:</span>
              <span>{order.name}</span>
            </div>
            <div className="info-group">
              <span>Email:</span>
              <span>{order.email}</span>
            </div>
            <div className="info-group">
              <span>Phone:</span>
              <span>{order.phone}</span>
            </div>
            <div className="info-group">
              <span>Address:</span>
              <span>{order.address}</span>
            </div>
          </div>
          <div className="infoGroups">
            <div className="info-group">
              <span>Sub Total Price:</span>
              {/* that it does not count all ordered products, but only mine */}
              <span>${order.orderItems?.filter(item => item.sellerId === userId)?.reduce((a,v) =>  a = a + v.price , 0 )?.toFixed(2)}</span>
            </div>
            <div className="info-group">
              {/* Earnings for the main site administrator per Order -> minus -> 10% for earnings of the site's main administrator, for each order */}
              <span>Admin Fee:</span>
              <span>${((order.orderItems?.filter(item => item.sellerId === userId)?.reduce((a,v) =>  a = a + v.price , 0 )) * 0.10)?.toFixed(2) }</span>
            </div>
            <div className="info-group">
              <span>Total Price:</span>
              <span>${(order.orderItems?.filter(item => item.sellerId === userId)?.reduce((a,v) =>  a = a + v.price , 0 ) - ((order.orderItems?.filter(item => item.sellerId === userId)?.reduce((a,v) =>  a = a + v.price , 0 ))* 0.10))?.toFixed(2)}</span>
            </div>
          </div>
          <div className="infoGroups">
            <div className="info-group">
              <span>Paid:</span>
              {order.isPaid ? (<span> Paid at {order.paidAt} </span>) : (
              <span>Not Paid!</span>
              )}
            </div>
            <div className="info-group">
              <span>Delivered:</span>
              {order.isDelivered ? (<span> Delivered at {order.deliveredAt} </span>) : (
                <span>Not Delivery!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoOrder
