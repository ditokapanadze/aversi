import React, { useState } from "react";
import "./CartContent.css";
import cartImg from "../assets/small1.png";
import { useSelector } from "react-redux";
function CartContent() {
  const basket = useSelector((state) => state.auth.user?.basket);

  let group = basket?.reduce((r, a) => {
    r[a._id] = [...(r[a._id] || []), a];
    return r;
  }, {});
  console.log(group);
  const cars = [
    {
      make: "audi",
    },
    {
      make: "audi",
    },
    {
      make: "ford",
    },
    {
      make: "ford",
    },
    {
      make: "kia",
    },
  ];

  let group1 = cars.reduce((r, a) => {
    r[a.make] = [...(r[a.make] || []), a];
    return r;
  }, {});
  // console.log(group1.kia);

  let counter = {};
  let sortedProduct = [];

  basket?.forEach(function (obj) {
    var key = JSON.stringify(obj);
    counter[key] = (counter[key] || 0) + 1;
  });
  // const makeArr = () => {
  //   let test = Object.keys(counter);
  //   let test1 = Object.values(counter);
  //   console.log(test1);
  //   console.log(JSON.parse(test[1]));
  //   for (var i = 0; i < test.length; i++) {
  //     counter1.push(JSON.parse(test[i]));
  //     counter1[i].quantity = test1[i];
  //   }
  // };

  const makeArr = () => {
    let key = Object.keys(counter);
    let value = Object.values(counter);
    console.log(key);
    console.log(value);
    // console.log(test1);
    // console.log(JSON.parse(test[1]));
    for (var i = 0; i < key.length; i++) {
      sortedProduct.push(JSON.parse(key[i]));
      sortedProduct[i].quantity = value[i];
    }
  };
  makeArr();
  console.log(sortedProduct);
  sortedProduct.map((item) => console.log(item));
  return (
    <>
      {/* <div className="cart__container__title">
        <p>კალათა</p>
        <p>მთავარი / კალათა</p>
      </div> */}

      <div className="cart__items">
        <div className="cart__left">
          <div className="cart__title">
            <p>პროდუქციის დასახელება</p>
            <p>ფასი</p>
            <p>რაოდენობა</p>

            <p>ჯამი</p>
          </div>

          {sortedProduct?.map((item) => (
            <>
              <div className="cart__item">
                <div className="product__type">
                  <img className="cart__img" src={item.photo} />
                  <div className="cart__item__title">
                    <p>{item.name}</p>
                    <p className="type">{item.type}</p>
                  </div>
                </div>
                <p className="item__price">{item.price}</p>
                <div className="add__delete">
                  <button>-</button>
                  <p>{item.quantity}</p>
                  <button>+</button>
                </div>
                <div>
                  <p>30.00 ლ</p>
                  <p className="delete__item">წაშლა</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="cart__right">
          <div className="product__price">
            <p>პროდუქცია</p>
            <p>234 ლარი</p>
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
      <p className="warning">
        გაყიდული პროდუქცია დაბრუნებას ან/და შეცვლას არ ექვემდებარება
      </p>
    </>
  );
}

export default CartContent;
