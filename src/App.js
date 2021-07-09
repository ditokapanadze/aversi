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

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <Switch>
          <Route path="/catalogue">
            <Catalogue />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
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
