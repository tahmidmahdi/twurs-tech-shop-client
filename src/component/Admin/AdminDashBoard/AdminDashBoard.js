import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const AdminDashBoard = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`https://radiant-escarpment-25711.herokuapp.com/allProducts`)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])
    return (
        <div>

        </div>
    );
};

export default AdminDashBoard;