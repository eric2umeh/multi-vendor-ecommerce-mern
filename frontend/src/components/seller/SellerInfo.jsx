import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Store } from '../../Store'
import SellerProduct from './SellerProduct'

const SellerInfo = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {cart, wish} = state;

    const [seller, setSeller] = useState([]);
    const [product, setProduct] = useState([]);

    const params = useParams();
    const {id} = params;

    const existUser = localStorage.getItem("userInfo");

  useEffect(() => {

    const fetchData = async () => {
        
      try {
        const result = await axios.get(`/api/users/user/${id}`);
        console.log(result.data);
        setSeller(result.data)


        const res = await axios.get(`/api/products/seller/${id}`);
        console.log(res.data);
        setProduct(res.data)


      } catch(err) {
        console.log("Error!");
      }
      
    }
    fetchData();

  }, [id]);

  const handlerFollow = () => {

    if(!existUser) {
      window.alert('Sorry. You must login.');
  } else {

      //If there is a user I am already following (localstorage), his id, from db
      const existItem = wish.wishItems.find((x) => x._id === seller._id);
        const quantity = existItem ? existItem.quantity : 1;
        
        if (existItem) {
            window.alert('Sorry. You are already following this user.');
            return;
        }
        
        ctxDispatch({
          type: 'WISH_ADD_ITEM',
          payload: { ...seller, quantity },
        });
    
    }

  }

  const handlerUnfollow = (seller) => {

    ctxDispatch({
        type: 'WISH_REMOVE_ITEM',
        payload: seller
    });

}

  //if exists seller
  const sellerExists = wish.wishItems.find((x) => x._id === seller._id);
    

  return (
    <div className='seller-row'>
      <div className="seller-col">
        <div className="seller-info">
            <div className="seller-header">
                <img src={seller.image} alt={seller.name} />
            </div>
            <div className="seller-body">
                <span>{seller.name}</span>
                <span>{seller.email}</span>
                <span>{seller.phone}</span>
                <span>{seller.address}</span>
            </div>
            <div className="seller-footer">
                {existUser && sellerExists ? (<span key={seller._id} onClick={() => handlerUnfollow(seller)} className='unfollow'>Unfollow</span>) : (<span onClick={handlerFollow} className='follow'>Follow</span>)}
                
            </div>
        </div>
      </div>
      <div className="seller-col">
          <h2 className='seller-title'>All Products of the Seller {seller.name}</h2>
          {product.length === 0 ? (<h3 className='info'>There are currently no products!</h3>) : (

            <div className="seller-products">
                <SellerProduct product={product} />
            </div>

          )}
            
      </div>
    </div>
  )
}

export default SellerInfo
