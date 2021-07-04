import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CartData = ({ product, price }) => {
    const [plusMinus, setPlusMinus] = useState(product.userQuantity)
    // const [total, setTotal] = useState(parseInt(product.price))
    
    // useEffect(() => {
    //     const newProduct = {
            
    //         ...product,
    //         price: parseInt(product.price * plusMinus),
    //         userQuantity:  plusMinus,

            
    //     }
    //     setData()
    // },[plusMinus, product])
    // console.log(data,'from adding up cart data')

    // useEffect(() => {
    //     setTotal(total + parseInt(product.price))
    // },[])
    // console.log(total, 'total price')
    
    return (

        
        <div className='card shadow-2xl rounded-md border-b-2 border-fuchsia-600 hue-rotate-15 text-center items-center'>
            <img src={product.url} alt="" />
            <h3 className='text-3xl tracking-widest mt-8 font-bold'>{product.name}</h3>
            <p className='mt-8 text-gray-400'> {product.model}</p>
            <br />
            {/* <FontAwesomeIcon onClick={() =>setPlusMinus(plusMinus + 1)}icon={faPlus} /> 
            
            <FontAwesomeIcon onClick={() =>setPlusMinus(plusMinus - 1)} icon={faMinus} />
            */}
            <p className='text-2xl tracking-widest text-red-600 font-bold'>  Quantity: {plusMinus}{' '} </p>
            <br />
            <p className='text-2xl'>$ {parseInt(product.price)}</p>
        </div>

       
                      
)};

export default CartData;