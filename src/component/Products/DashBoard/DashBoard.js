import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { emailContext } from '../../../App';
import DashBoardData from '../DashBoardData/DashBoardData';

const DashBoard = () => {
    const [email, setEmail] = useContext(emailContext)
    const [orderedProduct, setOrderedProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/dashboard/` + email)
            .then(function (response) {
                setOrderedProduct(response.data[0].details);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [email])
    
    const product = orderedProduct.filter(pd => pd.model !== undefined)
    
    return (
        <div>
            
           <h1 className="text-center text-3xl mt-12 tracking-widest">Your Current Orders Are</h1>
            <table class="border-separate border border-green-800 table-auto w-10/12 mt-8 m-auto">
                <thead>
                    <tr className='h-20 border border-black'>
                        <th class="border border-black w-8/12">Model</th>
                        <th class="border border-black ">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    
                   {
                       product.map(pd => <DashBoardData product={pd}></DashBoardData>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default DashBoard;