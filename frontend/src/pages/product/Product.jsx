import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductDetails from '../../components/productdetails/ProductDetails'
import './product.css'

const Product = () => {
  return (
    <div className="wrapper">
        {/* Header Start */}
        <header className='header-container'>
          <Header />
        </header>
        {/* Header End */}

        {/* Main Start */}
        <main className='main-container'>
          <ProductDetails />
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

export default Product
