import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNavBoard from '../../SharedComponents/AdminNavBoard/AdminNavBoard'
import './MakeAnAdmin.css'
const MakeAnAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email


        axios.post(`https://radiant-escarpment-25711.herokuapp.com/makeAnAdmin`,data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    };

    return (
        <div>
            


            <div className='content '>
                <h1 className='text-center tracking-widest text-2xl mt-12 makeadmin-heading'>Make an admin pannel</h1>
                <form className="makeanadmin-form mt-12 sm:ml-0" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })} placeholder="Enter admin email Address"/>
                    <br /> <br />
                    {errors.email && <span className='text-red-600'>This field is required</span>}
                    <br /><br />
                    <input className="cursor-pointer bg-white text-xl font-bold" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAnAdmin;