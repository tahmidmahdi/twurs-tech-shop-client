import axios from 'axios';
import React from 'react';

const DeleteAProductCart = ({ product }) => {
    const handleClick = (e) => {
        const id = e._id
        axios.post(`http://localhost:4000/deleteProduct`,{id})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        

    }
    return (
        <div className='card shadow-2xl rounded-md border-b-2 border-fuchsia-600 hue-rotate-15 text-center items-center'>

            <img src={product.url} alt="" />

            <h3 className='text-3xl tracking-widest mt-8 font-bold'>{product.name}</h3>
            <p className='mt-8 text-gray-400'> {product.model}</p>
            <button className='mt-8 button' onClick={() => handleClick(product)} >Delete This Product</button>
        </div>
    );
};

export default DeleteAProductCart;