import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.components";
import "./cart_dropdrown.styles.scss";
import CartItem from "../cart-item/cart_item.components";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
const Cart = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapsToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapsToProps)(Cart);
