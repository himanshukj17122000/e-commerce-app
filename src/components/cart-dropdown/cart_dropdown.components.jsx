import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import "./cart_dropdrown.styles.scss";

const Cart = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default Cart;
