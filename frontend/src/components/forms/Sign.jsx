import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sign = () => {

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfrimPassword] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert("Passwords doesn't match!");
            return;
        }

        try {

            const {data} = await axios.post("/api/users/register", {
                name,
                email,
                password,
                address,
                phone
            });
            //localStorage.setItem("userInfo", JSON.stringify(data));
            alert("You have successfully registered!");
            navigate('/login');


        } catch(error) {

            console.log("Error!");
            alert("Registration failed, please try again!");
        }
    }

  return (
    <div className='form-row'>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input required onChange={(e) => setName(e.target.value)} type="text" id='name' />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required onChange={(e) => setEmail(e.target.value)} type="email" id='email' />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input required onChange={(e) => setPassword(e.target.value)} type="password" id='password' />
            </div>
            <div className="form-group">
                <label htmlFor="r_password">Retype Password</label>
                <input required onChange={(e) => setConfrimPassword(e.target.value)} type="password" id='r_password' />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input required onChange={(e) => setAddress(e.target.value)} type="text" id='address' />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input required onChange={(e) => setPhone(e.target.value)} type="text" id='phone' />
            </div>
            <div className="form-btn">
                <button type='submit'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Register</button>
            </div>
            <div className="form-footer">
                <Link to="/login">Login</Link>
            </div>
        </form>
    </div>
  )
}

export default Sign
