import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AdminDashBoardCart from '../AdminDashBoardCart/AdminDashBoardCart';
import './AdminDashBoard.css'

const AdminDashBoard = () => {
    const [products, setProducts] = useState([])
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
    }, [])
    console.log(products)
    return (
        <div className=" adminDashboard product-card divide-x-2 ">
            {
                products.map(product => <AdminDashBoardCart product={product} key={product._id} ></AdminDashBoardCart>)
            }
        </div>
    );
};

export default AdminDashBoard;