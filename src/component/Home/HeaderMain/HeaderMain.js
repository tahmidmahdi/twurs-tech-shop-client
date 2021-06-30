import React from 'react';
import './HeaderMain.css'
import Typewriter from 'typewriter-effect';

import img from '../../../images/img1.jpg'
const HeaderMain = () => {
    return (
        <div className="row">
            <div className="column">

                <h1 className="text-5xl ml-5 mt-12  font-bold font-mono tracking-widest">Buy The <br /> Things  that you need</h1>
                <p className="mt-16 ml-5 tracking-widest">Twurs-Tech-Shop A Shop of your trust, Backed by powerful tools that help you to give a full user experience. We provide our customer all authentic products and quality is our promise</p>

               <div className="typewriter">
                    <Typewriter className="typewriter"
                        options={{
                            strings: ['A store For', 'Mobile', 'Laptop', 'Keyboard', 'Mouse', 'Coffees', 'Books'],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                    <button className="mt-12 ml-5 bg-green-500 button">Start Shopping Today</button>
               </div>

            </div>
            <div className="column">
                <img  className="main-img transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src={img} alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;