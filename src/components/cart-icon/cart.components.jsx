import React from "react";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.actions";

import "./cart.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";

const CartIcon = ({ toggleCardHidden }) => (
  <div className='cart-icon' onClick={toggleCardHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);
const mapsToDispatch = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});
export default connect(null, mapsToDispatch)(CartIcon);
