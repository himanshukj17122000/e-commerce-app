import React from 'react';

import { connect } from 'react-redux';
import { SelectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.components';
import '../collection/collection.styles.scss';
const CollectionPage = ({ collections }) => {
  const { title, items } = collections;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const MapsToProps = (state, ownProps) => ({
  collections: SelectCollection(ownProps.match.params.categoryId)(state),
});
export default connect(MapsToProps)(CollectionPage);
