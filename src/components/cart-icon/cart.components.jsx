import React from "react";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import "./cart.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";

const CartIcon = ({ toggleCardHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCardHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);
const mapsToDispatch = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

const mapsToState = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapsToState, mapsToDispatch)(CartIcon);
