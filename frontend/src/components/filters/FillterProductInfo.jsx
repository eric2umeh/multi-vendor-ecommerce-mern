import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../../Store'

const FillterProductInfo = ({product}) => {

    
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {cart} = state;

    const existUser = localStorage.getItem("userInfo");


    const addToCart = () => {

        if(!existUser) {
            window.alert('Sorry. You must login.');
        } else { 

            const existItem = cart.cartItems.find((x) => x._id === product._id);
            const quantity = existItem ? existItem.quantity + 1 : 1; // if exists in cart than quantity + 1, if not than 1


            ctxDispatch({
                type: 'CART_ADD_ITEM',
                payload: { ...product, quantity },
            });

        }

    }

  return (
    <div className="filter-card" key={product._id}>
        <div className="card-header">
            <img src={product.image} alt={product.name} />
            <Link to={`../seller/${product.sellerId}`}><img className='card-sellers' src={product.sellerImage} alt={product.seller} /></Link>
        </div>
        <div className="card-body">
            <Link to={`../${product.slug}`}>{product.name} <FontAwesomeIcon icon={faEye} /></Link>
            <span className='category'>{product.category}</span>
            <span className="price">${(product.price).toFixed(2)}/kg</span>
        </div>
        <div className="card-footer">
            <button onClick={addToCart}>Add to Bag</button>
        </div>
    </div>
  )
}

export default FillterProductInfo
