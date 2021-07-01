import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import LaptopCart from '../LaptopCart/LaptopCart';
import './Laptops.css'
import logo from '../../../images/logobg.gif'

const Laptops = () => {
    const [laptops, setLaptops] = useState([])

    
    useEffect(() => {
        fetch(`http://localhost:4000/allProducts`)
            .then(res => res.json())
            .then(products => {
                

                setLaptops(products.filter(data => data.category === 'Laptop'))

            })
    },[])

    console.log(laptops)
    return (


        <div>
            <NavBar></NavBar>

           <div className="image-logo"> <img  src={logo} alt="" /></div>

           <div className="product-card divide-x-2">
                {
                    laptops.map(laptop => <LaptopCart laptop={laptop} key={laptop._id}></LaptopCart>)
                }
           </div>

        </div>
    );
};

export default Laptops;