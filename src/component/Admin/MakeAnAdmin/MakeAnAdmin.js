import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNavBoard from '../../SharedComponents/AdminNavBoard/AdminNavBoard'
import './MakeAnAdmin.css'
const MakeAnAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email


        axios.post(`http://localhost:4000/makeAnAdmin`,data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    };

    return (
        <div>
            <AdminNavBoard />

            <div>
                <form className="makeanadmin-form" onSubmit={handleSubmit(onSubmit)}>
                   
                    <input {...register("email", { required: true })} placeholder="Enter admin email Address"/>
                    <br /> <br />
                    {errors.email && <span>This field is required</span>}

                    <input className="cursor-pointer" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAnAdmin;