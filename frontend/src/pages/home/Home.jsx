import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'
import Latest from '../../components/latest/Latest';
import Slider from '../../components/slider/Slider';
import Socials from '../../components/socials/Socials';
import "./home.css";

const Home = () => {
  return (
    <div className="wrapper">
        {/* Header Start */}
        <header className='header-container'>
          <Header />
        </header>
        {/* Header End */}

        {/* Main Start */}
        <main className='main-container'>
          <Slider />
          <Latest />
          <Socials />
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

export default Home