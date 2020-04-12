import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.components";

const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, indx) => indx < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps}></CollectionItem>
        ))}
    </div>
  </div>
);

export default PreviewCollection;