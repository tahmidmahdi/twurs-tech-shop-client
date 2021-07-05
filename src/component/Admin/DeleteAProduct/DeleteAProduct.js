import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import DeleteAProductCart from '../DeleteAProductCart/DeleteAProductCart';
import './DeleteAProduct.css'
// import AdminNavBoard from '../../SharedComponents/AdminNavBoard/AdminNavBoard'
const DeleteAProduct = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/allProducts`)
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
    console.log(products)
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