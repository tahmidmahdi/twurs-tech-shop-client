import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import CursorZoom from 'react-cursor-zoom';
import Modal from 'react-modal';
import './ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addCartAction } from '../../../Redux/Actions/addToCartAction';
import { useContext } from 'react';
import { emailContext } from '../../../App';
import axios from 'axios';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
// Modal.setAppElement('#ProductDetails');


const ProductDetails = () => {


    // this state handles to carry if a modal is true or false and the product value itself
    const [productDetails, setProductDetails] = useState({

        modal: false,
        product: [],
    })


    // react router params to get a specific value find by id
    let { e } = useParams();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname:'/login' } };


    // this is a context api state, to pass the value who logged in 
    const [email, setEmail] = useContext(emailContext)

    

   

    useEffect(() => {
        // we have gathered the specific product data by finding through id here
        fetch(`https://radiant-escarpment-25711.herokuapp.com/getProductData/` + e)
            .then(res => res.json())
            .then(data => {
                
                setProductDetails({...productDetails, product: data[0]})
               
            })   

    }, [e])

   

    const { url, category, model, name, price, quantity, details } = productDetails.product || {};

    // const [modal, setModal] = useState(false);
    const [plusMinus, setPlusMinus] = useState(0)
    const dispatch = useDispatch();


    const dispatchWithEmail = () => {
        if(email){
            
            dispatch(addCartAction({
                ...productDetails.product,
                email: email,
                userQuantity: plusMinus,
                price: parseInt(productDetails.product.price * plusMinus)
            }))

            

            //here we have update the quantity of a product
            axios.post('https://radiant-escarpment-25711.herokuapp.com/updateData', {
                ...productDetails.product,
                quantity: productDetails.product.quantity - plusMinus
                
            })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            

        }
        else{
            history.replace(from);
        }
    }
    return (
        <div className="product-details-div">


            { !productDetails.modal && <div>

                <CursorZoom
                    image={{
                        src: `${url}`,
                        width: 500,
                        height: 500
                    }}
                    zoomImage={{
                        src: `${url}`,
                        width: 1600,
                        height: 1200
                    }}
                    cursorOffset={{ x: 180, y: 80 }}
                />

            </div>}


            <div>

                <Modal
                    isOpen={productDetails.modal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div>
                        <div className='modal-div'>



                            <div>
                                <img className='product-details-img-modal' src={url} alt="" />
                            </div>
                            <div style={{ width: '400px' }}>
                                <h1 className='text-xl font-bold tracking-widest'>{model}</h1>
                                <br />
                                <p className='text-red-500 font-bold tracking-widest'>Available quantity {quantity - plusMinus}</p>
                                <br />
                                <p className='text-xs'>{details}</p>
                                <br />

                            </div>
                            <div className='mt-12'>
                                <h2 className='text-3xl text-red-500 font-bold'>Price ${price} * {plusMinus}</h2>
                                <br />
                                <div>
                                    <h4>
                                        <FontAwesomeIcon className='cursor-pointer' icon={faMinus} size='2x' onClick={() => setPlusMinus(plusMinus >= 1 ? plusMinus - 1 : plusMinus)} />
                                        {' '}  <strong className='plus-minus-div'> {plusMinus >= 0 ? plusMinus : alert('Amount Can not be negative')} </strong>
                                        <FontAwesomeIcon className='cursor-pointer' onClick={() => setPlusMinus(plusMinus + 1)} icon={faPlus} size='2x' />

                                    </h4>
                                </div>
                                {/* dispatch(addCartAction(product)) */}
                                <h1 className='mt-12 text-2xl tracking-widest font-bold text-black'>Total Price ${price * plusMinus}</h1>
                                <button className='button mt-12 ' onClick={()=> dispatchWithEmail()}>Add To Cart</button>
                            </div>
                        </div>
                        <button className='button' onClick={() => setProductDetails({...productDetails, modal: !productDetails.modal})}>Close</button>
                    </div>
                </Modal>




                <h1 className="text-3xl font-bold tracking-widest">{name}</h1>
                <br />
                <p className="text-gray-400">{category}</p>
                <br />
                <p className="font-bold">{model}</p>
                <br />
                <h3 className='text-2xl font-bold text-yellow-500'>${price}</h3>
                <br />
                <p className="font-bold">Available amount {quantity}</p>
                <br />
                <button className="button" onClick={() =>  setProductDetails({...productDetails, modal: !productDetails.modal})} >View Details</button>
                {/* setModal(!modal) */}
            </div>


        </div>
    );
};

export default ProductDetails;