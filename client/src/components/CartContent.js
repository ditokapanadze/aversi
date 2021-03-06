import React, { useState, useEffect } from "react";
import "./CartContent.css";
import cartImg from "../assets/small1.png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getUser } from "../actions/auth";
function CartContent() {
  const [total, setTotal] = useState("");

  let dispatch = useDispatch();

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    dispatch(getUser(config));
  }, [dispatch]);
  const basket = useSelector((state) => state.auth.user?.basket);
  const user_id = useSelector((state) => state.auth.user?._id);
  let counter = {};
  let sortedProduct = [];

  useEffect(() => {});
  basket?.forEach(function (obj) {
    var key = JSON.stringify(obj);
    counter[key] = (counter[key] || 0) + 1;
  });

  const makeArr = () => {
    let key = Object.keys(counter);
    let value = Object.values(counter);

    // console.log(test1);
    // console.log(JSON.parse(test[1]));
    for (var i = 0; i < key?.length; i++) {
      sortedProduct.push(JSON.parse(key[i]));
      sortedProduct[i].quantity = value[i];
    }
  };
  makeArr();

  const changeBasket = (e, product_id) => {
    const value = e.target.value;
    axios
      .put(`api/basket/changeBasket/${product_id}`, {
        user_id,
        value,
      })
      .then((res) => {
        const user = res.data.data;

        dispatch({ type: "NEW_BASKET", user: user });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const countTotal = sortedProduct.reduce(
      (acc, val) => acc + val.price * val.quantity,
      0
    );
    setTotal(countTotal);
  }, [changeBasket]);

  return (
    <>
      {/* <div className="cart__container__title">
        <p>კალათა</p>
        <p>მთავარი / კალათა</p>
      </div> */}
      {basket?.length > 0 ? (
        <div className="cart__items">
          <div className="cart__left">
            <div className="cart__title">
              <p>პროდუქციის დასახელება</p>
              <p>ფასი</p>
              <p>რაოდენობა</p>

              <p>ჯამი</p>
            </div>

            {sortedProduct?.map((item) => (
              <div className="cart__item" key={item._id}>
                <div className="product__type">
                  <img className="cart__img" src={item.photo} />
                  <div className="cart__item__title">
                    <p>{item.name}</p>
                    <p className="type">{item.type}</p>
                  </div>
                </div>
                <p className="item__price">{item.price}</p>
                <div className="add__delete">
                  <button
                    value="delete"
                    onClick={(e) => changeBasket(e, item._id)}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    value="add"
                    onClick={(e) => changeBasket(e, item._id)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <p>{(item.price * item.quantity)?.toFixed(2)}</p>
                  <p className="delete__item">წაშლა</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__right">
            <div className="product__price">
              <p>პროდუქცია</p>
              <p>{total && total?.toFixed(2)} ლარი</p>
            </div>
            <div className="comission">
              <p>მიტანის საკომისიო</p> <p>0 ლარი</p>
            </div>
            <div className="total">
              <p>სულ</p> <p>{total && total?.toFixed(2)} ლარი</p>
            </div>
            <button className="buy__btn">ყიდვა</button>
          </div>
        </div>
      ) : (
        <p>sdfsdf</p>
      )}

      <p className="warning">
        გაყიდული პროდუქცია დაბრუნებას ან/და შეცვლას არ ექვემდებარება
      </p>
    </>
  );
}

export default CartContent;
