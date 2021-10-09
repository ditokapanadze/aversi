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
  const [search, setSearch] = useState("");
  const [foundProducts, setFoundProducts] = useState([]);

  const auth = useSelector((state) => state.auth);
  console.log(auth.user);
  let dispatch = useDispatch();
  let history = useHistory();

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

      if (Date.now() >= decodedToken.exp * 1000) {
        localStorage.clear();
      }
    }
  }, []);

  // useEffect(() => {
  //   console.log("raxdebaa");
  //   axios
  //     .get("https://aversi.herokuapp.com/api/product/getproductSearch", {
  //       params: {
  //         search,
  //       },
  //     })
  //     .then((res) => setFoundProducts(res.data))
  //     .catch((err) => console.log(err));
  // }, [search]);
  const handleChange = (e) => {
    setSearch(e.target.value.trim());
    if (search.length >= 2) {
      axios
        .get("https://aversi.herokuapp.com/api/product/getproductSearch", {
          params: {
            search,
          },
        })
        .then((res) => setFoundProducts(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <header>
      <Link to="/">
        <img className="logo" clas src={aversiLogo} />
      </Link>
      <div className="search__container">
        {" "}
        <input
          className="search"
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="წამლის ძიება"
          value={search}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              alert("test");
            }
          }}
        />
        {foundProducts.length > 0 && search.length >= 2 && (
          <div className="found__product__container">
            {foundProducts.map((item) => (
              <div
                onClick={() => {
                  history.push(`product/${item._id}`, setSearch(""));
                }}
                className="found__product__info"
              >
                {" "}
                <img src={item.photo} className="found__product__img" />
                <p className="found__product__name">{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

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
