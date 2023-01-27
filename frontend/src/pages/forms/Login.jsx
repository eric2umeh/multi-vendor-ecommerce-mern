import React from 'react'
import Footer from '../../components/footer/Footer'
import SignIn from '../../components/forms/SignIn'
import Header from '../../components/header/Header'
import './forms.css'

const Login = () => {
  return (
    <div className="wrapper">
        {/* Header Start */}
        <header className='header-container'>
          <Header />
        </header>
        {/* Header End */}

        {/* Main Start */}
        <main className='main-container'>
          <SignIn />
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

export default Login