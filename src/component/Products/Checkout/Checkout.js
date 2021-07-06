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
    // const [cartProduct, setCartProduct] = useState([])
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
    

    //this map function is to get the total price
    cartData.map(data => {  
        total = total + parseInt(data.price)
    })
    console.log(cartData)



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        //adding total value with form data
        console.log(data)
        data.total = total

       

      
        //making an array of object with some specific value that i need to make a order collection
        const checkOutCart = cartData.map(product => {
            return {model: product.model, quantity: product.userQuantity, url: product.url}   
        })



        //in the newData i have added the form data, specified products data with email 
        const newData = {
            details: [data,...checkOutCart],
            email: email
        }
        

        // console.log(newData, 'after update newState')

        

       //in this rest api portion I have done posting the successful purchase data
        axios.post('http://localhost:4000/checkout/buy', newData)
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