import React from "react";
import "./Header.css";

import aversiLogo from "../assets/aversi-ltd.svg";

function Header() {
  return (
    <header>
      <img className="logo" clas src={aversiLogo} />

      <input className="search" type="text" placeholder="წამლის ძიება" />
      <div className="header__icons">
        {" "}
        <i className="far fa-user"></i>
        <i className="far fa-heart"></i>
        <i className="fas fa-cart-plus"></i>
      </div>
    </header>
  );
}

export default Header;
