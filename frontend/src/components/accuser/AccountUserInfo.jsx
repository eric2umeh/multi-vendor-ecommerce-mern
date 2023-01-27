import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import UserInfoOrders from './UserInfoOrders';

const AccountUserInfo = () => {

    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const id = userInfo && userInfo._id;

    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {

      const fetchData = async () => {
        try {

          const result = await axios.get(`/api/orders/userorders/${id}`);
          console.log(result.data);
          setUserOrders(result.data)
  
        } catch(err) {
          console.log("Error!");
        }
    }
    fetchData();

    }, [id])

  return (
    <>

    <div className='userInfoRow'>
        <p className="balance">My Earnings: <b>$00.00</b></p>
    </div>
    <div className="userInfoRow">

        <p className="userOrders">Users Order</p>

        <div className="account-orders">
            {userOrders.length === 0 ? (<h3 className='info userOrders'>You currently have no orders!</h3>) : (<UserInfoOrders userOrders={userOrders} />)}
        </div>

    </div>

    </>
  )
}

export default AccountUserInfo
