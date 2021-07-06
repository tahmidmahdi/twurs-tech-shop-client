import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import ProductCart from '../ProductCart/ProductCart';
import './Mobile.css'
import logo from '../../../images/logobg.gif'

const Mobile = () => {
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        fetch(`http://localhost:4000/allProducts`)
            .then(res => res.json())
            .then(products => {
                

                setProducts(products.filter(data => data.category === 'Phone'))

            })
    },[])

    console.log(products)
    return (


        <div>
            <NavBar></NavBar>

           <div className="image-logo"> <img  src={logo} alt="" /></div>

           <div className="product-card divide-x-2">
                {
                    products.map(mobile => <ProductCart product={mobile} key={mobile._id}></ProductCart>)
                }
           </div>

        </div>
    );
};

export default Mobile;