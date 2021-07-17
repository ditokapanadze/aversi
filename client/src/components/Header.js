import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import aversiLogo from "../assets/aversi-ltd.svg";
import decode from "jwt-decode";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = auth?.token;

    if (token) {
      const decodedToken = decode(token);
      setLoggedIn(true);
      // if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [location]);

  console.log(auth);
  return (
    <header>
      <img className="logo" clas src={aversiLogo} />

      <input className="search" type="text" placeholder="წამლის ძიება" />
      <div className="header__icons">
        {!loggedIn ? (
          <Link to="Login">
            <i class="fas fa-sign-in-alt">შესვლა</i>
          </Link>
        ) : (
          <div>
            <i className="far fa-user"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-cart-plus"></i>{" "}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
