import React, { useState } from "react";
import "./ProductInfo.css";
import small from "../assets/small1.png";
import large from "../assets/large1.png";
import axios from "axios";
import { useSelector } from "react-redux";

function ProductInfo({
  photo,
  name,
  price,
  type,
  form,
  code,
  producer,
  country,
  id,
}) {
  const [quantity, setQuantity] = useState(1);
  const [display, setDisplay] = useState("none");

  const auth = useSelector((state) => state.auth);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    quantity > 1 && setQuantity((prevState) => prevState - 1);
  };

  let config = {
    headers: { "Access-Control-Allow-Origin": "*" },
    body: {
      auth,
      quantity,
    },
  };

  const ShowPopup = () => {
    setDisplay("");
    setTimeout(() => {
      setDisplay("none");
    }, 3500);
  };
  const addToBasket = (id) => {
    const user_id = auth.user._id;
    ShowPopup();
    console.log(quantity);
    console.log("quantity");
    axios
      .put(`http://localhost:5001/api/basket/addToBasket/${id}`, {
        quantity,
        user_id,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="product__page__header">
        <p>{name}</p>
        <p>მთავარი / კატალოგი / წამლები / {name}</p>
      </div>
      <div className="product__info__container">
        {/* <div className="small__imgs">
          <div className="small__img">
            <img src={small} />
          </div>
          <div className="small__img">
            <img src={small} />
          </div>
        </div> */}
        <div className="large__img">
          <img className="large-img" src={photo} />
        </div>
        <div className="info__container">
          <p>დასახელება: {name}</p>
          <p>ფასი: {price} ლარი</p>
          <p>დანიშნულება: {type}</p>
          <p>ქვეყანა: {country}</p>
          <p>მწარმოებელი: {producer}</p>
          <p>გაცემის ფორმა: {form}</p>
          <p>კოდი: {code}</p>
          <div className="quantity">
            <div className="value">{quantity}</div>
            <div className="operators">
              <button onClick={increment} className="plus">
                +
              </button>
              <button onClick={decrement} className="minus">
                −
              </button>
            </div>
          </div>

          <div className="add__basket">
            <button onClick={() => addToBasket(id)} className="add__btn">
              კალათაში დამატება
            </button>{" "}
            <div className="heart__container">
              <i class="far fa-heart"></i>
            </div>
          </div>
          <div className="cart__popup" style={{ display: display }}>
            <p>კალათაში დაემატა ახალი პროდუქცია </p>
            <p>დასახელება : {name} </p>
            <p>რაოდენობა : {quantity} </p>
            <img className="cart__popup__img" src={photo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
