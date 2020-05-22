import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionsLoading } from '../../redux/shop/shop.selector';
import withSpinner from '../withSpinner/withSpinner.components';
import CollectionsOverview from './collections.overview.components';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoading(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
