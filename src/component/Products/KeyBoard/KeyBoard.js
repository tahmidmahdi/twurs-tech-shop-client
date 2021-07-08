import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import ProductCart from '../ProductCart/ProductCart';

import logo from '../../../images/logobg.gif'

const KeyBoard = () => {
    const [products, setProducts] = useState([])

    //  we have fatched our all product from database
    useEffect(() => {
        fetch(`https://radiant-escarpment-25711.herokuapp.com/allProducts`)
            .then(res => res.json())
            .then(products => {
                setProducts(products.filter(data => data.category === 'Keyboard'))
            })
    },[])

    console.log(products)
    return (


        <div>
            <NavBar></NavBar>

           <div className="image-logo"> <img  src={logo} alt="" /></div>

           <div className="product-card divide-x-2">
                {
                    products.map(product => <ProductCart product={product} key={product._id}></ProductCart>)
                }
           </div>

        </div>
    );
};

export default KeyBoard;