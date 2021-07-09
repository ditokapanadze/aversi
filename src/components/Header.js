import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import aversiLogo from "../assets/aversi-ltd.svg";

function Header() {
  return (
    <header>
      <img className="logo" clas src={aversiLogo} />

      <input className="search" type="text" placeholder="წამლის ძიება" />
      <div className="header__icons">
        <Link to="Login">
          <i class="fas fa-sign-in-alt">შესვლა</i>
        </Link>
        <i className="far fa-user"></i>
        <i className="far fa-heart"></i>
        <i className="fas fa-cart-plus"></i>
      </div>
    </header>
  );
}

export default Header;
