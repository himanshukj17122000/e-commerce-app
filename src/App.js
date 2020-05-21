import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.components';
import './App.css';
import { connect } from 'react-redux';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.components';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
//addCollectionAndDocs,
import { auth, createProfileUserDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from '../src/redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/checkout/checkout.page';
// import { GetAllForPreview } from '../src/redux/shop/shop.selector';
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    //collections
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createProfileUserDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      // addCollectionAndDocs(
      //   'collections',
      //   collections.map(({ title, items }) => ({ title, items }))
      // );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header> </Header>{' '}
        <Switch>
          <Route exact path='/' component={Homepage} />{' '}
          <Route path='/shop' component={ShopPage} />{' '}
          <Route exact path='/checkout' component={Checkout} />{' '}
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />
            }
          />{' '}
        </Switch>{' '}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collections: GetAllForPreview,
});
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchProps)(App);
