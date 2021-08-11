import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";

import "./app.css";
const App = () => {
  return (
    // Switch - робить так,  якщо один з внутрішніх роутів спрацьовував, інші ігноруються.
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default App;
