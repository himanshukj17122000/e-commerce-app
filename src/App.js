import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.components";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);
function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
