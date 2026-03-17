import React from 'react';
import './SIngleFood.css'

const SingleFood = ({food , addToCart}) => {
    return (
        <div className='single-food'>
            <img src={food.strMealThumb}></img>
            <h1>{food.strMeal}</h1>
            <button onClick={() => addToCart(food)}>Add To Cart</button>
        </div>
    );
};

export default SingleFood;