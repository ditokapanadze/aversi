import React from "react";
import "./ProductInfo.css";
import small from "../assets/small1.png";
import large from "../assets/large1.png";

function ProductInfo() {
  return (
    <>
      <div className="product__page__header">
        <p>რედუქსინი</p>
        <p>მთავარი / კატალოგი / წამლები / რედუქსინი</p>
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
          <img src={large} />
        </div>
        <div className="info__container">
          <p>რედუქსინი</p>
          <p>9.50 ლარი</p>
          <p>ანთების საქინააღმდეგო პრეპარატი</p>
          <p>ქვეყანა: დიდი ბრიტანეთი</p>
          <p>მწარმოებელი: რეკიტ ბენკისერი</p>
          <p>გაცემის ფორმა: III ჯგუფი ურეცეპტო</p>
          <p>კოდი: 845</p>
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
