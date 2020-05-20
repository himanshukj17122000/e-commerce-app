import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
// import "./collection-item.styles.scss";
import {
  CollectionItemContainer,
  CollectionFooter,
  SpanName,
  SpanPrice,
  BackgroundImage,
  AddButton,
} from './collection-item.styles';
// import CustomButton from '../custom-button/custom-button.components';
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl}></BackgroundImage>
      <CollectionFooter>
        <SpanName>{name}</SpanName>
        <SpanPrice>{price}</SpanPrice>
      </CollectionFooter>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
