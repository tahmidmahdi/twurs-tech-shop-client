import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './AddProducts.css'
const AddProducts = () => {






   
    var url = null;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {


        // destructure the data and then add extra property in it
        const newData = { ...data }
        newData.url = product.axiosURL;
        newData.date = new Date();
        newData.category = product.category;
        newData.details = product.checkbox;





        //  to add a product in database
        axios.post('https://radiant-escarpment-25711.herokuapp.com/addProduct', newData)
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });





    };


    const handleSelect = (e) => {
       
        //to upload image in imgbb
        
        const form = new FormData();
        form.set('key', 'd5c178daff730a82d11eaf1d08f8994b')
        form.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', form)
            .then(function (response) {
                // console.log(response.data.data.display_url);
                url = response.data.data.display_url;
                console.log(url)
                // setAxiosLink(url)
                setProduct({...product, axiosURL: url})

            })
            .catch(function (error) {
                console.log(error);
            });




    }


    // it is a state to contain multiple values of different products
    const [product, setProduct] = useState({
        laptop: {
            isLaptop: 'Laptop',
            ram: false,
            rom: false,
            isSSD: false,
        },
        phone: {

            firstCharge: false,
            waterProof: false,
        },
        category: null,
        checkbox: '',
        axiosURL: ''
    })




    console.log(product.laptop)

  




    const handleChange = (e) => {
        // in this section we will set the category of a product and corresponding to the category we will set some value as true and false

        if (e.target.value === 'laptop') {

            setProduct({
                ...product, laptop: {
                    ram: !product.laptop.ram,
                    rom: !product.laptop.rom,
                    isSSD: !product.laptop.isSSD
                },
                phone: {
                    firstCharge: false,
                },
                category: 'Laptop'
            })



            
        }


        if (e.target.value === 'phone') {



            setProduct({
                ...product,
                phone: {
                    firstCharge: !product.phone.firstCharge,
                    waterProof: !product.phone.waterProof,
                },

                laptop: {
                    ram: false
                },
                category: 'Phone'
            })


        }

        if (e.target.value === 'mouse') {

            setProduct({ ...product, laptop: { ram: false }, phone: { firstCharge: false }, category: 'Mouse' })

        }

        if (e.target.value === 'keyboard') {

            setProduct({ ...product, laptop: { ram: false }, phone: { firstCharge: false }, category: 'Keyboard' })
        }

        if (e.target.value === 'books') {

            setProduct({ ...product, laptop: { ram: false }, phone: { firstCharge: false }, category: 'Books' })
        }

        if (e.target.value === 'coffee') {

            setProduct({ ...product, laptop: { ram: false }, phone: { firstCharge: false }, category: 'Coffee' })
        }


    }

    const handleBlur = (e) => {
       
        setProduct({...product, checkbox : e.target.value})
    }



    return (
        <div>
            <div className="form-action content">
                <h1 className="lg:text-5xl text-center mb-8 tracking-widest sm:text-xl">Add A Products</h1>


                <form className="form-action text-center" onSubmit={handleSubmit(onSubmit)}>


                    {product.category === 'Books' && <>

                        <label htmlFor="name">Enter Books Name</label>
                        <br />
                        <input {...register("name", { required: true })} />
                        <br />
                        {errors.name && <span >This field is required</span>}
                        <br /> <br />

                        <label htmlFor="model">Enter Books Author Name</label>
                        <br />
                        <input {...register("model", { required: true })} />
                        <br />
                        {errors.model && <span >This field is required</span>}
                        <br /> <br />


                    </>}



                    {product.category !== 'Books' && <>
                        <label htmlFor="name">Enter Product Brand Name</label>
                        <br />
                        <input {...register("name", { required: true })} />
                        <br />
                        {errors.name && <span >This field is required</span>}
                        <br /> <br />


                        <br /> <br />
                        <label htmlFor="model">Enter Product Model</label>
                        <br />
                        <input {...register("model", { required: true })} />
                        <br />
                        {errors.model && <span >This field is required</span>}
                        <br /> <br />
                    </>}


                    <br /> <br />
                    <label htmlFor="">Enter Product Category</label>
                    <br />


                    <select onChange={handleChange} className='input-options'>
                        <option value="phone">Phone</option>
                        <option value="mouse">Mouse</option>
                        <option value="laptop">Laptop</option>
                        <option value="keyboard">Keyboard</option>
                        <option value="books">Books</option>
                        <option value="coffee">Coffee</option>
                    </select>



                    <br /> <br />






                    {/* */}

                    <label htmlFor="">Enter Product Image</label>
                    <br />
                    <input className='img-input' onChange={(e) => handleSelect(e)} type="file" name="" id="" />
                    <br /> <br />
                    {
                        product.axiosURL && <p className="text-green-400">{product.axiosURL}</p>
                    }
                    <br /> <br />








                    <label htmlFor="details">Enter Product Details</label>
                    <br />
                    <textarea onBlur={handleBlur} className="input-div" name="details" id="" cols="30" rows="10"></textarea>
                    <br /> <br />







                    <label htmlFor="price">Enter Product Price in $</label>
                    <br />
                    <input type="number"   {...register("price", { required: true })} />
                    <br />
                    {errors.price && <span>This field is required</span>}
                    <br /> <br />


                    {/* it only shows when we clicked on the category as laptop. When we clicked then the ram is set to be true then it will show us the option to set ram, rom and ssd */}
                    {
                        product?.laptop?.ram &&

                        <>
                            <label htmlFor="ram">Ram (in GB)</label>
                            <br />
                            <input type="ram" {...register("ram", { required: true })} />
                            <br />
                            {errors.ram && <span>This field is required</span>}
                            <br /> <br />




                            <label htmlFor="rom">Rom  (in GB)</label>
                            <br />
                            <input type="rom"   {...register("rom", { required: true })} />
                            <br />
                            {errors.rom && <span>This field is required</span>}
                            <br /> <br />


                            <label htmlFor="ssd">SSD  (in GB)</label>
                            <br />
                            <input type="ssd"   {...register("ssd", { required: true })} />
                            <br />
                            {errors.ssd && <span>This field is required</span>}
                            <br /> <br />

                        </>
                    }





                    {/* this section will only show when we set our category as phone.  */}
                    {

                        product?.phone?.waterProof &&


                        <>

                            <label htmlFor="firstCharge">First Charge (in Watt)</label>
                            <br />
                            <input type="firstCharge" {...register("firstCharge", { required: true })} />
                            <br />
                            {errors.firstCharge && <span>This field is required</span>}
                            <br /> <br />


                            <label htmlFor="waterProof">Water Proof</label>
                            <br />
                            <input type="waterProof" {...register("waterProof", { required: true })} />
                            <br />
                            {errors.waterProof && <span>This field is required</span>}
                            <br /> <br />
                        </>

                    }


                    <label htmlFor="quantity">Enter Product Quantity</label>
                    <br />
                    <input type="number" {...register("quantity", { required: true })} />
                    <br />
                    {errors.quantity && <span>This field is required</span>}
                    <br /> <br />

                    <input className="mb-8" type="submit" />



                </form>
            </div>

        </div>

    );
};

export default AddProducts;