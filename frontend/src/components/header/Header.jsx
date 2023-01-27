import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLock, faPhone, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import '../../pages/home/home.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Store } from '../../Store';

const Header = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo");

    const { state, dispatch:ctxDispatch } = useContext(Store);
    const {cart, wish} = state;

    const signouthandler = () => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("cartItems");
        alert("You have successfully logged out!");
        navigate("/login");
    }

  return (
    <div className='header-row'>
        <div className="header-top">
            <span><FontAwesomeIcon icon={faPhone}/>+381/0000000</span>
            <span><FontAwesomeIcon icon={faEnvelope}/>ricpewebcode@gmail.com</span>
        </div>
        <div className="header-menu">
            <div className="header-logo">
                <Link to="/"><h2 className="header-logo-title">Miljan Peric</h2></Link>
            </div>
            <div className="header-nav">
                <NavLink to="/" activeclassname="active">Home</NavLink>
                <NavLink to="/shop" activeclassname="active">Shop</NavLink>
                <NavLink to="/sellers" activeclassname="active">Sellers</NavLink>
            </div>
            <div className="header-action">
                {userInfo && (
                    <>
                        <Link to="/account"><FontAwesomeIcon icon={faHome} /></Link>
                        <Link to="/follow"><FontAwesomeIcon icon={faUser} />{wish.wishItems.length ? (<span className='header-cart-badge'>{wish.wishItems.length}</span>) : (<span className='header-cart-badge'>0</span>)}</Link>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} />{cart.cartItems.length ? (<span className='header-cart-badge'>{cart.cartItems.length}</span>) : (<span className='header-cart-badge'>0</span>)}</Link>
                    </>
                )}
                
                {
                    userInfo ? (<span className='logout' onClick={signouthandler}><FontAwesomeIcon icon={faLock} />Logout</span>) : (<Link to="/login"><FontAwesomeIcon icon={faLock} />Login</Link>)
                }
            </div>
        </div>
    </div>
  )
}

export default Header
