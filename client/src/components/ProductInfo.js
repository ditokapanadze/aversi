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

  const auth = useSelector((state) => state.auth);

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const decrement = () => {
    quantity > 1 && setQuantity((prevState) => prevState - 1);
  };
  const addToBasket = (id) => {
    axios
      .put(`http://localhost:5000/api/basket/addToBasket/${id}`, {
        auth,
        quantity,
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
        <div className="small__imgs">
          <div className="small__img">
            <img src={small} />
          </div>
          <div className="small__img">
            <img src={small} />
          </div>
        </div>
        <div className="large__img">
          <img className="large-img" src={photo} />
        </div>
        <div className="info__container">
          <p>{name}</p>
          <p>{price} ლარი</p>
          <p>{type}</p>
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
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
