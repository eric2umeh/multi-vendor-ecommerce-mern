import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store'

const SellerProductInfo = ({pro}) => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {cart} = state;

    const existUser = localStorage.getItem("userInfo");

    const addToCart = () => {

        if(!existUser) {
            window.alert('Sorry. You must login.');
        } else { 

            const existItem = cart.cartItems.find((x) => x._id === pro._id);
            const quantity = existItem ? existItem.quantity + 1 : 1; // if exists in cart than quantity + 1, if not than 1


            ctxDispatch({
                type: 'CART_ADD_ITEM',
                payload: { ...pro, quantity },
            });

        }

    }

  return (
    <div className="filter-card" key={pro._id}>
        <div className="card-header">
            <img src={pro.image} alt={pro.name} />
        </div>
        <div className="card-body">
            <Link to={`../${pro.slug}`}>{pro.name} <FontAwesomeIcon icon={faEye} /></Link>
            <span className='category'>{pro.category}</span>
            <span className="price">${(pro.price).toFixed(2)}/kg</span>
        </div>
        <div className="card-footer">
            <button onClick={addToCart}>Add to Bag</button>
        </div>
    </div>
  )
}

export default SellerProductInfo
