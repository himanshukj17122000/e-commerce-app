import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections.styles.scss';
import { GetAllForPreview } from '../../redux/shop/shop.selector';
import PreviewCollection from '../preview-collection/preview-collection.components';
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
  collections: GetAllForPreview,
});
export default connect(mapsToProps)(CollectionsOverview);
