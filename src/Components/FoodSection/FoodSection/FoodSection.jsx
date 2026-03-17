import React, { use, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import Cart from '../Cart/Cart';
import './FoodSection.css'
import { ToastContainer, toast } from 'react-toastify';

const FoodSection = ({foodPromise}) => {
    const foodData = use(foodPromise)
    const foods = foodData.meals

    const [cart , setCart] = useState([])
    const addToCart = (foodData) => {
        setCart([...cart , foodData])
    }

    const handlingOrder = () => {
        setCart([])
        toast("Order Successful!")
    }
    
    return (
        <div className='container-parent'>
            <div className='foods-container'>
            {
                    foods.map(food => <SingleFood food={food} addToCart={addToCart}></SingleFood>)
            }
            </div>
            <Cart cart={cart} handlingOrder={handlingOrder}></Cart>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default FoodSection;