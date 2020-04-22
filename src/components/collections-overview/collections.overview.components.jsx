import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections.styles.scss";
import { GetAllShopItems } from "../../redux/shop/shop.selector";
import PreviewCollection from "../preview-collection/preview-collection.components";
const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps}></PreviewCollection>
      ))}
    </div>
  );
};
const mapsToProps = createStructuredSelector({
  collections: GetAllShopItems,
});
export default connect(mapsToProps)(CollectionsOverview);
