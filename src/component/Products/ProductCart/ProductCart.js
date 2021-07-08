import React from 'react';
import { useHistory } from 'react-router-dom';
import './ProductCart.css'
const ProductCart = ({product}) => {


    let history = useHistory()

    
    return (
        <div className='card shadow-2xl rounded-md border-b-2 border-fuchsia-600 hue-rotate-15 text-center items-center'>
          
            <img src={product.url} alt="" />
            
            <h3 className='text-3xl tracking-widest mt-8 font-bold'>{product.name}</h3>
            <p className='mt-8 text-gray-400'> {product.model}</p>
            <button className='mt-8 button' onClick={()=> history.push(`/products/`+product._id)} >View Details</button>
        </div>
    );
};

export default ProductCart;