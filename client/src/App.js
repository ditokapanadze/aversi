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
import Map from "./screens/Map.js";
import ForgotpasswordPage from "./screens/ForgotpasswordPage.js";
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
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <PrivateRoute path="/profile" component={ProfilePage} />
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/sold">
            <PaymantPage />
          </Route>
          <Route path="/passwordreset/:token">
            <ForgotpasswordPage />
          </Route>
          <Route path="/adress">
            <Map />
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
