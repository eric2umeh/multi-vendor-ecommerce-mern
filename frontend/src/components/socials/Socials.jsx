import React from 'react'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <div className='socials-row'> 
        <h1>Follow us on Social Networks</h1>
        <div className="socials-group">
            <Link to="/"><img src="./assets/images/others/fb.png" alt="" /></Link>
            <Link to="/"><img src="./assets/images/others/in.png" alt="" /></Link>
            <Link to="/"><img src="./assets/images/others/li.png" alt="" /></Link>
        </div>
    </div>
  )
}

export default Socials