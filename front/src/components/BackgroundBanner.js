import React from "react";
import "./BackgroundBanner.css";
import banner from "../assets/aversi_homepage_photo.jpg";

function BackgroundBanner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <p className="banner__text">
          შექმენით თქვენი პირადი <br /> სააფთიქო თარო
        </p>
        <button className="banner__btn"> გაიგეთ მეტი...</button>
      </div>
    </div>
  );
}

export default BackgroundBanner;
