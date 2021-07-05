import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './AddProducts.css'
const AddProducts = () => {

    // const [options, setOptions] = useState({
    //     ram: null,
    //     rom: null,
    //     isSSD: null,
    //     isSugar: false,

    // })




    const [axiosLink, setAxiosLink] = useState(null)
    var url = null;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const newData = { ...data }
        newData.url = axiosLink;
        newData.date = new Date();
        newData.category = category;
        newData.details = checkbox;




        axios.post('http://localhost:4000/addProduct', newData)
            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });





    };


    const handleSelect = (e) => {
        // console.log(e.target.files[0])
        const form = new FormData();
        form.set('key', 'd5c178daff730a82d11eaf1d08f8994b')
        form.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', form)
            .then(function (response) {
                // console.log(response.data.data.display_url);
                url = response.data.data.display_url;
                console.log(url)
                setAxiosLink(url)

            })
            .catch(function (error) {
                console.log(error);
            });




    }


    const [category, setCategory] = useState(null)

    const [laptop, setLaptop] = useState({
        isLaptop: 'Laptop',
        ram: null,
        rom: null,
        isSSD: false,
    })


    const [phone, setPhone] = useState({

        firstCharge: false,
        waterProof: false,
    })

    console.log(laptop)

    const [checkbox, setCheckBox] = useState('')




    const handleChange = (e) => {
        console.log(e.target.value)

        if (e.target.value === 'laptop') {
            setLaptop({
                ...laptop,
                ram: !laptop.ram,
                rom: !laptop.rom,
                isSSD: !laptop.isSSD,
            })

            setCategory('Laptop')

            console.log(laptop)
        }


        if (e.target.value === 'phone') {


            setPhone({
                ...phone,
                firstCharge: !phone.firstCharge,
                waterProof: !phone.waterProof,

            })

            setCategory('Phone')

            setLaptop(!laptop.ram)
        }

        if (e.target.value === 'mouse') {
            setCategory('Mouse')
            setLaptop(!laptop.ram)
            setPhone(!phone.firstCharge)
        }

        if (e.target.value === 'keyboard') {
            setCategory('Keyboard')
            setLaptop(!laptop.ram)
            setPhone(!phone.firstCharge)
        }

        if (e.target.value === 'books') {
            setCategory('Books')
            setLaptop(!laptop.ram)
            setPhone(!phone.firstCharge)
        }

        if (e.target.value === 'coffee') {
            setCategory('Coffee')
            setLaptop(!laptop.ram)
            setPhone(!phone.firstCharge)
        }


    }

    const handleBlur = (e) => {
        console.log(e.target.value)
        setCheckBox(e.target.value)
    }



    return (
        <div>
            <div className="form-action content">
                <h1 className="lg:text-5xl text-center mb-8 tracking-widest sm:text-xl">Add A Products</h1>


                <form className="form-action text-center" onSubmit={handleSubmit(onSubmit)}>


                    {category === 'Books' && <>

                        <label htmlFor="booksName">Enter Books Name</label>
                        <br />
                        <input {...register("booksName", { required: true })} />
                        <br />
                        {errors.booksName && <span >This field is required</span>}
                        <br /> <br />

                        <label htmlFor="author">Enter Books Author Name</label>
                        <br />
                        <input {...register("author", { required: true })} />
                        <br />
                        {errors.author && <span >This field is required</span>}
                        <br /> <br />


                    </>}



                    {category !== 'Books' && <>
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
                        axiosLink && <p className="text-green-400">{axiosLink}</p>
                    }
                    <br /> <br />




                    {/* <label htmlFor="details">Enter Product Details</label>
                    <br />
                    <input className="input-div" {...register("details", { required: true })} />
                    <br />
                    {errors.details && <span>This field is required</span>}
                    <br /> <br /> */}



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



                    {
                        laptop.ram &&

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


                    {

                        phone.waterProof &&


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





            {/* <form className='text-center' onSubmit={handleSubmit} >

               <label htmlFor="brand">Enter Brand Name</label>
               <br />
               <input onBlur={handleBlur} type="text" name="brand" id=""  required/>
               <br /> <br />

               <label htmlFor="product">Enter Product Name</label>
               <br />
               <input type="text" name="product" id=""  required/>
               <br /> <br />

               <label htmlFor="price">Enter Product Price</label>
               <br />
               <input type="number" name="price" id=""  required/>
               <br /> <br />

                <label htmlFor="description">Enter Description</label>
                <br />
                <textarea name="description" id="" cols="30" rows="10"></textarea>
                <br /> <br />
                <input type="submit" value="Submit" />
            </form> */}
        </div>

    );
};

export default AddProducts;