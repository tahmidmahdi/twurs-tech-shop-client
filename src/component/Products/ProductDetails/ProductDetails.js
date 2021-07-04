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
    let { e } = useParams();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname:'/login' } };
    const [email, setEmail] = useContext(emailContext)

    console.log(e, 'params')

    const [product, setProduct] = useState()

    useEffect(() => {

        fetch(`http://localhost:4000/getProductData/` + e)
            .then(res => res.json())
            .then(data => {
                setProduct(data[0])
               
            })   


            // setProduct(data)
    }, [e])


    console.log(product)
    console.log(`product-----`, product)

    const { url, category, model, name, price, quantity, details } = product || {};

    const [modal, setModal] = useState(false);
    const [plusMinus, setPlusMinus] = useState(0)
    const dispatch = useDispatch();


    const dispatchWithEmail = () => {
        if(email){
            
            dispatch(addCartAction({
                ...product,
                email: email,
                userQuantity: plusMinus,
                price: parseInt(product.price * plusMinus)
            }))


            axios.post('http://localhost:4000/updateData', {
                ...product,
                quantity: product.quantity - plusMinus
                
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


            { !modal && <div>

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
                    isOpen={modal}
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
                        <button className='button' onClick={() => setModal(!modal)}>Close</button>
                    </div>
                </Modal>




                <h1 className="text-3xl font-bold tracking-widest	">{name}</h1>
                <br />
                <p className="text-gray-400">{category}</p>
                <br />
                <p className="font-bold">{model}</p>
                <br />
                <h3 className='text-2xl font-bold text-yellow-500'>${price}</h3>
                <br />
                <p className="font-bold">Available amount {quantity}</p>
                <br />
                <button className="button" onClick={() => setModal(!modal)}>View Details</button>
            </div>


        </div>
    );
};

export default ProductDetails;