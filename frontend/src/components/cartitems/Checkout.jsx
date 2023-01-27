import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Checkout = ({idSeller, setOpenCheckout, cartItems, itemsPrice, taxPrice, totalPrice}) => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const id = userInfo && userInfo._id;

    //console.log(idSeller);

    const [name, setName] = useState(userInfo && userInfo.name);
    const [email, setEmail] = useState(userInfo && userInfo.email);
    const [address, setAddress] = useState(userInfo && userInfo.address);
    const [phone, setPhone] = useState(userInfo && userInfo.phone);

    const handlerAddProduct = async (e) => {
      e.preventDefault();

      try {

        const { data } = await axios.post("/api/orders", {

            orderItems: cartItems,
            id: userInfo._id,
            name: name,
            email: email,
            address: address,
            phone: phone,
            sellerId: idSeller,
            itemsPrice: itemsPrice,
            taxPrice: taxPrice,
            totalPrice: totalPrice,

        });

        if(data) {

          localStorage.removeItem('cartItems');
          setOpenCheckout(false);
          navigate('/account');

        }

      } catch(error) {

        console.log("Order Failed!");
      }

    }

  return (
    <div className='passwords'>
      <form onSubmit={handlerAddProduct}>
        <h5 className='orderPay'> You will pay after delivery! </h5>
        <div className="close-form" onClick={() => setOpenCheckout(false)}>X</div>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input required type="text" id='name' onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="form-group">
            <label htmlFor="slug">Email</label>
            <input required type="text" id='slug' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
            <label htmlFor="category">Address</label>
            <input required type="text" id='category' onChange={(e) => setAddress(e.target.value)} value={address} />
        </div>
        <div className="form-group">
            <label htmlFor="description">Phone</label>
            <input required type="text" id='description' onChange={(e) => setPhone(e.target.value)} value={phone} />
        </div>
        <div className="form-btn">
            <button type='submit'>Order <FontAwesomeIcon icon={faTruck} /></button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
