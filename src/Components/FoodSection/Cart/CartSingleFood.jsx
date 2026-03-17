import React from 'react';
import '../Cart/CartSingleFood.css'

const CartSingleFood = ({c}) => {
    return (
        <div className='single-cart'>
            <img src={c.strMealThumb}></img>
            <h3>{c.strMeal}</h3>
        </div>
    );
};

export default CartSingleFood;