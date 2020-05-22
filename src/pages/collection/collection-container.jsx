import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsLoading } from '../../redux/shop/shop.selector';
import withSpinner from '../../components/withSpinner/withSpinner.components';
import CollectionPage from './collection.components';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoading(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
