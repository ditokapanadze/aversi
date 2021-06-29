import React, { useState, useEffect } from "react";
import "./SaleLeaders.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import medicine from "../assets/medicine.png";
import star from "../assets/star.png";
import useWindowDimensions from "./useWindowDimensions";
SwiperCore.use([Navigation, Pagination]);

function SaleLeaders() {
  const { height, width } = useWindowDimensions();
  const [slidesNumber, setSlidesNumber] = useState(4);
  const [space, setSpace] = useState(48);
  useEffect(() => {
    if (width < 1400) {
      setSlidesNumber(3);
      setSpace(30);
    } else if (width > 1400) {
      setSlidesNumber(4);
      setSpace(48);
    }
  }, [width]);
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
        <SwiperSlide>
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
          <img className="slider__img" src={medicine} />
          <h3 className="slider__title">დ-პანტენოლი</h3>
          <p className="medicine__review">კრემი გარე გამოყენებისთვის</p>
          <div className="slider__footer">
            <h3 className="slider__price">8.50 ლარი</h3>
            <button className="slider__button">ყიდვა</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
          <img className="slider__img" src={medicine} />
          <h3 className="slider__title">დ-პანტენოლი</h3>
          <p className="medicine__review">კრემი გარე გამოყენებისთვის</p>
          <div className="slider__footer">
            <h3 className="slider__price">8.50 ლარი</h3>
            <button className="slider__button">ყიდვა</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
          <img className="slider__img" src={medicine} />
          <h3 className="slider__title">დ-პანტენოლი</h3>
          <p className="medicine__review">კრემი გარე გამოყენებისთვის</p>
          <div className="slider__footer">
            <h3 className="slider__price">8.50 ლარი</h3>
            <button className="slider__button">ყიდვა</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
          <img className="slider__img" src={medicine} />
          <h3 className="slider__title">დ-პანტენოლი</h3>
          <p className="medicine__review">კრემი გარე გამოყენებისთვის</p>
          <div className="slider__footer">
            <h3 className="slider__price">8.50 ლარი</h3>
            <button className="slider__button">ყიდვა</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
          <img className="slider__img" src={medicine} />
          <h3 className="slider__title">დ-პანტენოლი</h3>
          <p className="medicine__review">კრემი გარე გამოყენებისთვის</p>
          <div className="slider__footer">
            <h3 className="slider__price">8.50 ლარი</h3>
            <button className="slider__button">ყიდვა</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
          <img className="slider__img" src={medicine} />
          <h3 className="slider__title">დ-პანტენოლი</h3>
          <p className="medicine__review">კრემი გარე გამოყენებისთვის</p>
          <div className="slider__footer">
            <h3 className="slider__price">8.50 ლარი</h3>
            <button className="slider__button">ყიდვა</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
          <img className="slider__img" src={medicine} />
          <h3 className="slider__title">დ-პანტენოლი</h3>
          <p className="medicine__review">კრემი გარე გამოყენებისთვის</p>
          <div className="slider__footer">
            <h3 className="slider__price">8.50 ლარი</h3>
            <button className="slider__button ">ყიდვა</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SaleLeaders;
