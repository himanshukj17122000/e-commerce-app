import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.components';
import CollectionsOverview from '../../components/collections-overview/collections.overview.components';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectFetching,
  selectCollectionsLoading,
} from '../../redux/shop/shop.selector';
import withSpinner from '../../components/withSpinner/withSpinner.components';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isFetching, isCollectionsLoading } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={!isCollectionsLoading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isFetching: selectFetching,
  isCollectionsLoading: selectCollectionsLoading,
});
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
