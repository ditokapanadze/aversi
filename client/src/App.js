import React from "react";

import Home from "./screens/Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Catalogue from "./screens/Catalogue.js";
import ProductPage from "./screens/ProductPage.js";
import CartPage from "./screens/CartPage.js";
import PaymantPage from "./screens/PaymantPage.js";
import ProfilePage from "./screens/ProfilePage.js";
import LoginPage from "./screens/LoginPage.js";
import PrivateRoute from "./routing/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/catalogue">
            <Catalogue />
          </Route>
          <Route path="/Login">
            <LoginPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>

          <PrivateRoute path="/profile">
            <ProfilePage />
          </PrivateRoute>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/sold">
            <PaymantPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
