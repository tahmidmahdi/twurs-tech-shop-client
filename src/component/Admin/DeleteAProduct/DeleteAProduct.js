import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import DeleteAProductCart from '../DeleteAProductCart/DeleteAProductCart';
import './DeleteAProduct.css'

const DeleteAProduct = () => {

    const [products, setProducts] = useState([])


    // to get all product list
    useEffect(() => {
        axios.get(`https://radiant-escarpment-25711.herokuapp.com/allProducts`)
        .then(function (response) {
            // handle success
            setProducts(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    },[])
    


    return (
        <div className='content'>
           <div className='flex justify-around flex-wrap deleteProduct'>
               {
                   products.map(product => <DeleteAProductCart product={product}></DeleteAProductCart>)
               }
           </div>

        </div>
    );
};

export default DeleteAProduct;