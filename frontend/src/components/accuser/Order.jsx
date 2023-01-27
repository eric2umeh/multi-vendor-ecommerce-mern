import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Order = () => {

  const userInfo = localStorage.getItem("userInfo");

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
            {order.orderItems?.map((item) => (
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
              <span>Tax Price:</span>
              <span>${(order.taxPrice)?.toFixed(2)}</span>
            </div>
            <div className="info-group">
              <span>Total Price:</span>
              <span>${(order.totalPrice)?.toFixed(2)}</span>
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

export default Order
