import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import emailContext from '../../../App'
import { emailContext } from '../../../App';
import CartData from '../CartData/CartData';
const Cart = () => {
    const [email, setEmail] = useContext(emailContext)
    
    const [cartData, setCartData] = useState([])
    useEffect(() => {

       
        axios.get(`https://radiant-escarpment-25711.herokuapp.com/cartByEmail/` + email)
            .then(function (response) {
                console.log(response);
                setCartData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [email])


    const history = useHistory()
    const handleClick = () => {
        history.push('/checkout')
    }
    console.log(cartData, 'from cartData')

    let total = 0;
    cartData.map(data => {
        total = total + parseInt(data.price)
    })
    console.log(total)
    return (
        <div>
            <div className='flex flex-row justify-evenly sm:flex-col md:flex-col   lg:flex-row'>



                {
                    cartData.map(product => <CartData key={product._id} product={product}  ></CartData>)
                }



            </div>

            <p className='text-center text-2xl tracking-widest font-bold text-red-600'>Total Cost : {total}</p>
            <div className='flex justify-center mt-12'>
                <button className='button' onClick={handleClick}>Proceed To Checkout</button>
            </div>
        </div>
       
    );
};

export default Cart;