import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <div className='slider-row'>
        <div className="slider-col">
            <img src="./assets/images/others/slider.png" alt="" />
        </div>
        <div className="slider-col">
            <h2>The largest online market in the Balkans with the largest number of products and sellers.</h2>
            <Link to="/shop"><FontAwesomeIcon icon={faEye} /> View More</Link>
        </div>
    </div>
  )
}

export default Slider
