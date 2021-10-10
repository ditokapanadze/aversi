import React, { useEffect, useState } from "react";
import "./CartSimilars.css";
import star from "../assets/star.png";
import dpantol from "../assets/dpantol.png";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/product";

function CartSimilars() {
  const [randomProduct, setRandomProduct] = useState([]);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    let page = 1;
    dispatch(getProduct(page));
  }, []);
  const random = [];
  const randomizer = () => {
    for (var i = 0; i < 4; i++) {
      random.push(
        product[0]?.data[Math.floor(Math.random() * product[0]?.data.length)]
      );
    }
  };
  randomizer();
  console.log(random);
  return (
    <div className="similar__items">
      <p>იხილეთ აგრეთვე</p>
      <div className="similar__container">
        {random.map((item, index) =>
          index < 4 ? (
            <div className="similar__item">
              <div className="similar__item__heading">
                <div className="stars">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <i class="far fa-heart"></i>
              </div>
              <img src={item?.photo} style={{ width: "200px" }} />
              <div>
                <h3>{item?.name}</h3>
                <p>{item?.type}</p>
              </div>{" "}
              <div className="similar__item__footer">
                <h3 className="similar__item__price">{item?.price}</h3>
                <button className="similar__item__button">ყიდვა</button>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default CartSimilars;
