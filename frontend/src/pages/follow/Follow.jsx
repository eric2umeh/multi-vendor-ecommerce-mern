import React from 'react'
import FollCustomer from '../../components/followcustomer/FollCustomer'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './follow.css'

const Follow = () => {
  return (
    <div className="wrapper">
        {/* Header Start */}
        <header className='header-container'>
          <Header />
        </header>
        {/* Header End */}

        {/* Main Start */}
        <main className='main-container'>
          <FollCustomer />
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

export default Follow
