import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import aversiLogo from "../assets/aversi-ltd.svg";
import jwt_decode from "jwt-decode";

import { useHistory } from "react-router-dom";

import { getUser } from "../actions/auth";
import axios from "axios";
import { verify } from "jsonwebtoken";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const location = useLocation();

  let history = useHistory();
  let dispatch = useDispatch();

  console.log(auth.token);
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    dispatch(getUser(config));
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      if (Date.now() >= decodedToken.exp * 1000) {
        console.log("token expired");
        localStorage.clear();
      }
    }
  }, []);

  return (
    <header>
      <Link to="/">
        <img className="logo" clas src={aversiLogo} />
      </Link>

      <input className="search" type="text" placeholder="წამლის ძიება" />
      <div className="header__icons">
        {!auth.token ? (
          <Link to="/Login">
            <i class="fas fa-sign-in-alt">შესვლა</i>
          </Link>
        ) : (
          <div>
            <Link to="/profile">
              <i className="far fa-user"></i>
            </Link>
            <i className="far fa-heart"></i>
            <Link to="/cart">
              <i className="fas fa-cart-plus"></i>
            </Link>
            <Link to="/">
              <i
                onClick={() => dispatch({ type: "LOG_OUT" })}
                class="fas fa-sign-out-alt"
              ></i>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
