import React from 'react';
import { useHistory } from 'react-router-dom';
import './LaptopCart.css'
const LaptopCart = ({laptop}) => {


    let history = useHistory()

    // console.log(laptop)
    const handleClick = (e) => {
        console.log(e)
        history.push(`/products/`+e._id);

    }
    return (
        <div className='card shadow-2xl rounded-md border-b-2 border-fuchsia-600 hue-rotate-15 text-center items-center'>
          
            <img src={laptop.url} alt="" />
            
            <h3 className='text-3xl tracking-widest mt-8 font-bold'>{laptop.name}</h3>
            <p className='mt-8 text-gray-400'> {laptop.model}</p>
            <button className='mt-8 button' onClick={()=> handleClick(laptop)} >View Details</button>
        </div>
    );
};

export default LaptopCart;