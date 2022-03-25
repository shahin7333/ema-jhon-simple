import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Products.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='products'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>

            </div>

            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='add-to-cart'><b>Add to Card</b></p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;