import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { emailContext } from '../../../App';

const DashBoard = () => {
    const [email, setEmail] = useContext(emailContext)
    const [orderedProduct, setOrderedProduct] = useState([])
    // useEffect(() => {
    //     axios.get(`http://localhost:4000/dashboard/` + email)
    //       .then(function (response) {
    //         setOrderedProduct(response.data[0]);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
        
    // },[])
    console.log(orderedProduct)
    return (
        <div>
            {
                orderedProduct.map(product => <li>1</li>)
            }
        </div>
    );
};

export default DashBoard;