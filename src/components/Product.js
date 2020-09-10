import React, { useState } from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';

import { Flipper, Flipped } from "react-flip-toolkit";

function Product({ id, title, price, image, rating }) {
    //for animation
    const [fullScreen, setFullScreen] = useState(false);
    const toggleFullScreen = () => setFullScreen(prevState => !prevState);

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    };
    return (
        <Flipper flipKey={fullScreen}>
            <Flipped flipId="square">
                <div className={fullScreen ? "full-screen-square" : ""}
                    onClick={toggleFullScreen} >
                    <div className="product" >
                        <div className="product_info">
                            <p>{title}</p>
                            <p className="product_price">
                                <small>$</small>
                                <strong>{price}</strong>
                            </p>
                            <div className="product_rating">
                                {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                        <p>⭐</p>
                                    ))}


                            </div>
                        </div>

                        <img src={image} alt="Image" />
                        <button onClick={addToBasket}>Add to Basket</button>


                    </div>
                </div>
            </Flipped>
        </Flipper>
    );
}

export default Product;
