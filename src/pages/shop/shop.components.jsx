import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.components';
import CollectionsOverview from '../../components/collections-overview/collections.overview.components';
import { firestore, convertData } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
class ShopPage extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const CollectionRef = firestore.collection('collections');
    CollectionRef.onSnapshot(async snapshot => {
      const collectionData = convertData(snapshot);
      updateCollections(collectionData);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
      </div>
    );
  }
}
const mapStateToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapStateToProps)(ShopPage);
