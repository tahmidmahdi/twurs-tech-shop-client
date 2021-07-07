import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';

const AdminDashBoardCart = ({ product }) => {

    const [editProduct, setEditProduct] = useState(0)
    const handleEdit = (e) => {
        
        e.quantity = parseInt(e.quantity) + editProduct;
        // console.log(e)
        axios.post(`https://radiant-escarpment-25711.herokuapp.com/editProduct`, e)
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
            <p className='text-xl mt-6'> 
                <FontAwesomeIcon icon={faMinus} onClick={()=> setEditProduct(editProduct-1)}/> {' '}
                    {parseInt( product.quantity) + editProduct } {' '}
                <FontAwesomeIcon icon={faPlus} onClick={()=> setEditProduct(editProduct+1)} />
            </p>
            <button className='mt-8 button' onClick={() => handleEdit(product)}>Confirm Edit Details</button>
        </div>
    );
};

export default AdminDashBoardCart;