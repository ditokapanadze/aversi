import React, { useState, useEffect } from "react";
import "./SaleLeaders.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import medicine from "../assets/medicine.png";
import star from "../assets/star.png";
import { useSelector, useDispatch } from "react-redux";
import useWindowDimensions from "./useWindowDimensions";
import { getProduct } from "../actions/product";
SwiperCore.use([Navigation, Pagination]);

function SaleLeaders() {
  const { height, width } = useWindowDimensions();
  const [slidesNumber, setSlidesNumber] = useState(4);
  const [space, setSpace] = useState(48);

  let dispatch = useDispatch();

  const product = useSelector((state) => state.product);

  useEffect(() => {
    if (width < 1400) {
      setSlidesNumber(3);
      setSpace(30);
    } else if (width > 1400) {
      setSlidesNumber(4);
      setSpace(48);
    }
  }, [width]);

  useEffect(() => {
    console.log("tet");
    let page = 0;
    dispatch(getProduct(page));
  }, []);

  console.log(product);

  return (
    <div className="slider">
      <h2 className="leaders">ლიდერები გაყიდვაში</h2>
      <Swiper
        spaceBetween={space}
        slidesPerView={slidesNumber}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {product[0]?.data.map((item) =>
          item.leader === true ? (
            <SwiperSlide>
              {" "}
              <div className="slider__header">
                <div className="stars">
                  {" "}
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <i class="far fa-heart"></i>
              </div>
              <img
                className="slider__img"
                src={item.photo}
                style={{ width: "70%" }}
              />
              <h3 className="slider__title">{item.name}</h3>
              <p className="medicine__review">{item.type}</p>
              <div className="slider__footer">
                <h3 className="slider__price">{item.price}</h3>
                <button className="slider__button">ყიდვა</button>
              </div>
            </SwiperSlide>
          ) : (
            ""
          )
        )}
      </Swiper>
    </div>
  );
}

export default SaleLeaders;
