import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CursorZoom from 'react-cursor-zoom';
import Modal from 'react-modal';
import './ProductDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
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


const ProductDetails = () => {
    let { e } = useParams();

    console.log(e, 'params')

    const [product, setProduct] = useState([])

    useEffect(() => {

        fetch(`http://localhost:4000/getProductData/` + e)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [e])


    console.log(product)

    const { url, category, model, name, price, quantity, details } = product[0] || [];

    const [modal, setModal] = useState(false);
    const [plusMinus, setPlusMinus] = useState(0)

    return (
        <div className="product-details-div">


            <div>

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

            </div>


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

                                <br />
                                <p className='text-xs'>{details}</p>
                                <br />
                            </div>
                            <div className='mt-12'>
                                <h2 className='text-3xl text-red-500 font-bold'>Price ${price} * {plusMinus}</h2>
                                <br />
                                <div>
                                    <h4>

                                        <FontAwesomeIcon icon={faMinus} size='2x' onClick={() => setPlusMinus(plusMinus - 1)} />
                                        {' '}  <strong className='plus-minus-div'> {plusMinus} </strong>
                                        <FontAwesomeIcon onClick={() => setPlusMinus(plusMinus + 1)} icon={faPlus} size='2x' />

                                    </h4>
                                </div>
                            </div>
                        </div>
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
                <button className="button" onClick={() => setModal(true)}>View Details</button>
            </div>


        </div>
    );
};

export default ProductDetails;