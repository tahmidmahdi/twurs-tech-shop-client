import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { emailContext } from '../../../App';
import './Checkout.css'
const Checkout = () => {
    const [email, setEmail] = useContext(emailContext)
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/cartByEmail/` + email)
            .then(function (response) {
                console.log(response);
                setCartData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [email])

    let total = 0;
    cartData.map(data => {
        total = total + parseInt(data.price)
        cartData.totalPrice = total

    })
    console.log(total)
    // console.log(cartData,'cart data')



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

       

        // const newData = {
        //     // ...cartData,
        //     deliveryInfo: data,
        //     orderBy: email
        // }

        cartData.buyerName = data.name;
        cartData.address = data.address;
        cartData.orderBy = email

        console.log(cartData, 'after update')

        

        console.log(cartData)
        axios.post('http://localhost:4000/checkout/buy', cartData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };


    return (
        <div className='text-center text-3xl mt-12 font-bold'>
            <h1>Buy Now</h1>
            <div className='mt-12'>
                <form className='buy-form' onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true })} placeholder="Enter Your Name" />
                    <br /> <br />
                    {errors.name && <span>This field is required</span>}
                    <br />


                    <input {...register("address", { required: true })} placeholder="Enter Your Address" />
                    <br /> <br />
                    {errors.address && <span>This field is required</span>}
                    <br />




                    <input type="submit" value='Buy Now' />
                </form>
            </div>
        </div>
    );
};

export default Checkout;