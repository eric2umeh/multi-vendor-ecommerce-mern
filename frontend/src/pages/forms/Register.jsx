import React from 'react'
import Footer from '../../components/footer/Footer'
import Sign from '../../components/forms/Sign'
import Header from '../../components/header/Header'
import './forms.css'

const Register = () => {
  return (
    <div className="wrapper">
        {/* Header Start */}
        <header className='header-container'>
          <Header />
        </header>
        {/* Header End */}

        {/* Main Start */}
        <main className='main-container'>
            <Sign />
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

export default Register
