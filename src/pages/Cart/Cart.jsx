import React, { useContext } from 'react';
import './Cart.css'

const Cart = () => {
    const { cartItems, removeFromCart, food_list } = useContext(StoreContext)
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Tilte</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {
                    food_list.map((items, index) => {
                        if (cartItems[items._id] > 0) {
                            return (
                                <div>
                                    <div className='cart-items-title cart-items-item'>
                                        <img src={items.image} alt="" />
                                        <p>{items.name}</p>
                                        <p>${items.price}</p>
                                        <p>{cartItems[items._id]}</p>
                                        <p>${items.price * cartItems[items._id]}</p>
                                        <p onClick={() => removeFromCart(items._id)} className='cross'>x</p>
                                    </div>
                                    <hr />
                                </div>
                            )
                        }

                    })}
            </div>
        </div>
    );
};
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext';

export default Cart;