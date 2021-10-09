import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  });

  return (
    <div className="navbar">
      <ul className="nav__ul">
        <Link to="/catalogue">
          <li
            className={`nav__li ${
              location.pathname === "/catalogue" ? "active__button" : ""
            }`}
          >
            კატალოგი
          </li>
        </Link>
        <Link to="/adress">
          <li
            className={`nav__li ${
              location.pathname === "/adress" ? "active__button" : ""
            }`}
          >
            აფთიაქები
          </li>
        </Link>

        <li className="nav__li">კლინიკები</li>
        <Link to="/aboutus">
          <li
            className={`nav__li ${
              location.pathname === "/aboutus" ? "active__button" : ""
            }`}
          >
            ჩვენს შესახებ
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
