import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {addToCart,removeFromCart} from '../redux/CartSlice'
import { useDispatch,useSelector } from 'react-redux';

const ProductModal = ({ product }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);   

    const cartItems = useSelector((state) => state.cart.cartItems);    
    // Check if the product is already in the cart
    const isInCart = cartItems.some((item) => item._id === product._id);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle Add to Cart
    const handleAddToCart = () => {
        dispatch(addToCart(product));  // Dispatch addToCart action
    };

    // Handle Remove from Cart
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product._id));  // Dispatch removeFromCart action
    };    

    return (
        <>
            <Button  className="card-btn mx-3" variant="primary" onClick={handleShow}>View</Button>

            {isInCart ? (
                <Button className="add-cart-btn" variant="danger" onClick={handleRemoveFromCart}>
                    Remove 
                </Button>
            ) : (
                <Button className="add-cart-btn" variant="primary" onClick={handleAddToCart}>
                    Add to Cart
                </Button>
            )}
            
            <Modal className='product-modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={product.image} alt={product.name} className="img-fluid" />
                    <p>{product.description}</p>
                    <h4>Price: ${product.price}</h4>
                    <p>Quantity Available: {product.quantity}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}

export default ProductModal