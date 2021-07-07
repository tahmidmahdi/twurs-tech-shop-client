import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import ProductCart from '../ProductCart/ProductCart';
// import './Mobile.css'
import logo from '../../../images/logobg.gif'

const Coffee = () => {
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        fetch(`https://radiant-escarpment-25711.herokuapp.com/allProducts`)
            .then(res => res.json())
            .then(products => {
                

                setProducts(products.filter(data => data.category === 'Coffee'))

            })
    },[])

    console.log(products)
    return (


        <div>
            <NavBar></NavBar>

           <div className="image-logo"> <img  src={logo} alt="" /></div>

           <div className="product-card divide-x-2">
                {
                    products.map(coffee => <ProductCart product={coffee} key={coffee._id}></ProductCart>)
                }
           </div>

        </div>
    );
};

export default Coffee;