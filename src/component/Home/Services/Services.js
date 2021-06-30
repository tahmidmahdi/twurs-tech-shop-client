import React from 'react';
import './Service.css'
import pin from '../../../images/pin.svg'
import genuine from '../../../images/smartphone.svg'
import warrenty from '../../../images/5-year-warranty.svg'
import img2 from '../../../images/img2.jpg'

const Services = () => {
    return (
        <div>
            <h1 className='ml-10 mt-10 text-5xl service-h1 text-red-500'>Services</h1>
            <h1 className='text-5xl ml-10 mt-8 font-mono tracking-widest'>
                Create a customer relationships <br /> that last forever
            </h1>


            <div className=' service mb-10 animate-pulse'>

                <div className='mt-12'>
                    <img style={{ width: '70px' }} className='' src={pin} alt="" />
                    <h1 className='text-3xl  mt-8 font-mono tracking-widest'>24/7 service</h1>
                    <p className='text-gray-500'>We provide 24/7 hours of service through out customer service helpline just to give you better service.</p>
                </div>


                <div>
                    <img style={{ width: '70px' }} className='' src={warrenty} alt="" />
                    <h1 className='text-3xl  mt-8 font-mono tracking-widest'>5+ years Warranty</h1>
                    <p className='text-gray-500'>We provide more than 5 years of service warranty. Every product is also valuable to us. It is a form of commitment to us.</p>
                </div>
                <div>
                    <img style={{ width: '70px' }} className='' src={genuine} alt="" />
                    <h1 className='text-3xl  mt-8 font-mono tracking-widest'>Genuine Certified</h1>
                    <p className='text-gray-500'>We have a reputation of selling genuine products and we promise to deliver genuine products every time to our happy customers</p>
                </div>
                
            </div>
            <img className=' service-image mb-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110' src={img2} alt="" />
        </div>
    );
};

export default Services;