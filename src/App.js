import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.components";
import "./App.css";
import { connect } from "react-redux";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.components";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import { auth, createProfileUserDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createProfileUserDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchProps)(App);
