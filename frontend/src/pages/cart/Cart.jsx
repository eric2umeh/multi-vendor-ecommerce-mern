import React from 'react'
import CartItems from '../../components/cartitems/CartItems'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './cart.css'

const Cart = () => {
  return (
    <div className="wrapper">
        {/* Header Start */}
        <header className='header-container'>
          <Header />
        </header>
        {/* Header End */}

        {/* Main Start */}
        <main className='main-container'>
          <CartItems />
        </main>
        {/* Main End*/}

        {/* Footer Start */}
        <footer className='footer-container'>
          <Footer />
        </footer>
        {/* Footer End*/}
    </div>
  )
}

export default Cart
