import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Navbar() {
  // const decode = () => {
  //   var token = localStorage.getItem("authToken");
  //   var decoded = jwt_decode(token);

  //   console.log(decoded);
  // };
  // decode();
  return (
    <div className="navbar">
      <ul className="nav__ul">
        <Link to="/catalogue">
          <li className="nav__li">კატალოგი</li>
        </Link>
        <Link to="/adress">
          <li className="nav__li">აფთიაქბი</li>
        </Link>

        <li className="nav__li">კლინიკები</li>
        <li className="nav__li">კატალოგი</li>
        <li className="nav__li">ჩვენს შესახებ</li>
      </ul>
    </div>
  );
}

export default Navbar;
