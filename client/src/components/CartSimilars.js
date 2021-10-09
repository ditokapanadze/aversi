import React from "react";
import "./CartSimilars.css";
import star from "../assets/star.png";
import dpantol from "../assets/dpantol.png";

function CartSimilars() {
  return (
    <div className="similar__items">
      <p>იხილეთ აგრეთვე</p>
      <div className="similar__container">
        <div className="similar__item">
          <div className="similar__item__heading">
            <div className="stars">
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <i class="far fa-heart"></i>
          </div>
          <img src={dpantol} />
          <div>
            <h3>დ-პანტენოლი</h3>
            <p>კრემი გარე გამოყენებისთვის</p>
          </div>{" "}
          <div className="similar__item__footer">
            <h3 className="similar__item__price">8.50 ლარი</h3>
            <button className="similar__item__button">ყიდვა</button>
          </div>
        </div>
        <div className="similar__item">
          <div className="similar__item__heading">
            <div className="stars">
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <i class="far fa-heart"></i>
          </div>
          <img src={dpantol} />
          <div>
            <h3>დ-პანტენოლი</h3>
            <p>კრემი გარე გამოყენებისთვის</p>
          </div>{" "}
          <div className="similar__item__footer">
            <h3 className="similar__item__price">8.50 ლარი</h3>
            <button className="similar__item__button">ყიდვა</button>
          </div>
        </div>
        <div className="similar__item">
          <div className="similar__item__heading">
            <div className="stars">
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <i class="far fa-heart"></i>
          </div>
          <img src={dpantol} />
          <div>
            <h3>დ-პანტენოლი</h3>
            <p>კრემი გარე გამოყენებისთვის</p>
          </div>{" "}
          <div className="similar__item__footer">
            <h3 className="similar__item__price">8.50 ლარი</h3>
            <button className="similar__item__button">ყიდვა</button>
          </div>
        </div>
        <div className="similar__item">
          <div className="similar__item__heading">
            <div className="stars">
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <i class="far fa-heart"></i>
          </div>
          <img src={dpantol} />
          <div>
            <h3>დ-პანტენოლი</h3>
            <p>კრემი გარე გამოყენებისთვის</p>
          </div>{" "}
          <div className="similar__item__footer">
            <h3 className="similar__item__price">8.50 ლარი</h3>
            <button className="similar__item__button">ყიდვა</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSimilars;
