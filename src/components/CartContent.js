import React from "react";
import "./CartContent.css";
import cartImg from "../assets/small1.png";

function CartContent() {
  return (
    <>
      <div className="cart__container__title">
        <p>კალათა</p>
        <p>მთავარი / კალათა</p>
      </div>
      <div className="cart__container">
        <div className="cart__items">
          <div className="cart__left">
            <div className="cart__title">
              <p>პროდუქციის დასახელება</p>
              <p>ფასი</p>
              <p>რაოდენობა</p>

              <p>ჯამი</p>
            </div>
            <div className="cart__item">
              <div className="product__type">
                <img className="cart__img" src={cartImg} />
                <div className="cart__item__title">
                  <p>რედუქსინი</p>
                  <p>
                    ანტების <br />
                    საწინააღმდეგო{" "}
                  </p>
                </div>
              </div>
              <p className="item__price"> 20.00 ლ</p>
              <div className="add__delete">
                <div>-</div>
                <div>1</div>
                <div>+</div>
              </div>
              <div>
                <p>30.00 ლ</p>
                <p className="delete__item">წაშლა</p>
              </div>
            </div>
          </div>
          <div className="cart__right">
            <div className="product__price">
              <p>პროდუქცია</p> <p>234 ლარი</p>
            </div>
            <div className="comission">
              <p>მიტანის საკომისიო</p> <p>0 ლარი</p>
            </div>
            <div className="total">
              <p>სულ</p> <p>234 ლარი</p>
            </div>
            <button className="buy__btn">ყიდვა</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContent;
