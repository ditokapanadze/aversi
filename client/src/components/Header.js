import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import aversiLogo from "../assets/aversi-ltd.svg";
import decode from "jwt-decode";
import { useHistory } from "react-router-dom";

import { getUser } from "../actions/auth";
import axios from "axios";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = useSelector((state) => state.auth);

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
    // axios
    //   .get("http://localhost:5000/api/private", config)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }, [dispatch]);
  console.log(auth);
  return (
    <header>
      <img className="logo" clas src={aversiLogo} />

      <input className="search" type="text" placeholder="წამლის ძიება" />
      <div className="header__icons">
        {!auth.token ? (
          <Link to="Login">
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
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
