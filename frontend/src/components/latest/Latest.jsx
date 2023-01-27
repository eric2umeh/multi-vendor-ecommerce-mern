import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import LatestSeller from './LatestSeller'

const Latest = () => {

    const[users, setUsers] = useState([]); //Default is empty
    const[products, setProducts] = useState([]); //Default is empty

    useEffect(() => {
        
        const fetchData = async () => {

            const result = await axios.get("/api/users/all");
            console.log(result.data);
            setUsers(result.data);

            const res = await axios.get("/api/products");
            console.log(res.data);
            setProducts(res.data);
        }

        fetchData();

    }, []);

  return (
    <div className='latest-row'>
        <div className="latest-col">
            <h2>New Fresh Products</h2>
            {products.length === 0 ? (<h3 className='info'>There are currently no products!</h3>) : (

                <div className="latest-products">

                    {/*i want only last 3 fetch, not all*/}
                    {products.slice(-3).map((product) => (
                        <div className="latest-group" key={product._id}>
                            <div className="latest-header">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="latest-body">
                                <Link to={`${product.slug}`}>{product.name} <FontAwesomeIcon icon={faEye} /></Link>
                                <span className='category'>{product.category}</span>
                                <span className="price">${(product.price).toFixed(2)}/kg</span>
                            </div>
                        </div>
                    ))}
    
                </div>

            )}
            
        </div>
        <div className="latest-col">
            <h2>We provide support to newly registered sellers</h2>
            {users.length === 0 ? (<h3 className='info'>There are currently no registered sellers!</h3>) : (

                <div className="latest-sellers">
                
                    {/*i want only last 6 fetch, not all*/}
                    {users.slice(-6).map((user) => (
                    <LatestSeller key={user._id} user={user} />
                    ))}

                </div>

            )}
            
        </div>
    </div>
  )
}

export default Latest
