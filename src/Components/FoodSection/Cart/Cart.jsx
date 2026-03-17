import React from 'react';
import './Cart.css'
import CartSingleFood from './CartSingleFood';


const Cart = ({cart , handlingOrder}) => {
    
    return (
        <div className='cart'>
            <h1>Cart</h1>
            {
                cart.map(c => <CartSingleFood c={c}></CartSingleFood>)
            }
            <button onClick={handlingOrder}>Order</button>
        </div>
    );
};

export default Cart;