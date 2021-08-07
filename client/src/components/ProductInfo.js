import React from "react";
import "./ProductInfo.css";
import small from "../assets/small1.png";
import large from "../assets/large1.png";

function ProductInfo({
  photo,
  name,
  price,
  type,
  form,
  code,
  producer,
  country,
}) {
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
            <div className="value">0</div>
            <div className="operators">
              <button className="plus">+</button>
              <button className="minus">−</button>
            </div>
          </div>
          <div className="add__basket">
            <button className="add__btn">კალათაში დამატება</button>{" "}
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
