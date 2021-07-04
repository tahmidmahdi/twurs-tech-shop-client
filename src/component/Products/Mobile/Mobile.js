import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import ProductCart from '../ProductCart/ProductCart';

import logo from '../../../images/logobg.gif'

const Mobile = () => {
    const [laptops, setLaptops] = useState([])

    
    useEffect(() => {
        fetch(`http://localhost:4000/allProducts`)
            .then(res => res.json())
            .then(products => {
                

                setLaptops(products.filter(data => data.category === 'Phone'))

            })
    },[])

    console.log(laptops)
    return (


        <div>
            <NavBar></NavBar>

           <div className="image-logo"> <img  src={logo} alt="" /></div>

           <div className="product-card divide-x-2">
                {
                    laptops.map(laptop => <ProductCart product={laptop} key={laptop._id}></ProductCart>)
                }
           </div>

        </div>
    );
};

export default Mobile;