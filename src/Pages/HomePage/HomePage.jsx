import React from "react";
import './HomePage.css';
import Products from './Products.json'


const HomePage = (props) => {
    const handleClickOnCart = (product) => {
        console.log("click", product);

        const itemExists = Products.find((cartItem) => {
            return cartItem.id === product.id
        })
        if (itemExists) {
            itemExists.pieces++;
        } else {
            Products.push(product);
        }

        console.log('itemExists', itemExists)
    }

    return (
        <div className='item-list'>
            {Products.map((product) => {
                return (
                    <div className='product'>
                        <h2>{product.title}</h2>
                        <img src={product.image}></img>
                        <p>{product.price} $</p>
                        <button className='button' onClick={() => {
                            handleClickOnCart(product);
                        }}>Add to cart</button>
                    </div>
                )
            })
            }
        </div >
    )
}

export default HomePage;