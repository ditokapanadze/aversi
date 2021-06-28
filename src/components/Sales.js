import React from "react";
import "./Sales.css";
import "./SaleLeaders.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import medicine from "../assets/medicine.png";
import chipolino from "../assets/chipolino.png";
SwiperCore.use([Navigation, Pagination]);

function Sales() {
  return (
    <div className="sales">
      <h2>მიმდინარე აქციები</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="sales__slider">
          <img className="sales__slider__img" src={chipolino} />
          <h5 className="sales__slider__date">10 ივლისი, 2020</h5>
          <p className="sales__slider__preview">
            ეწვიეთ ავერსს და ისარგებლეთ ჩიპოლინოს საბავშვო პროდუქციაზე 20%-იანი
            ფასდაკლებით
          </p>
        </SwiperSlide>
        <SwiperSlide className="sales__slider">
          <img className="sales__slider__img" src={chipolino} />
          <h5 className="sales__slider__date">10 ივლისი, 2020</h5>
          <p className="sales__slider__preview">
            ეწვიეთ ავერსს და ისარგებლეთ ჩიპოლინოს საბავშვო პროდუქციაზე 20%-იანი
            ფასდაკლებით
          </p>
        </SwiperSlide>
        <SwiperSlide className="sales__slider">
          <img className="sales__slider__img" src={chipolino} />
          <h5 className="sales__slider__date">10 ივლისი, 2020</h5>
          <p className="sales__slider__preview">
            ეწვიეთ ავერსს და ისარგებლეთ ჩიპოლინოს საბავშვო პროდუქციაზე 20%-იანი
            ფასდაკლებით
          </p>
        </SwiperSlide>
        <SwiperSlide className="sales__slider">
          <img className="sales__slider__img" src={chipolino} />
          <h5 className="sales__slider__date">10 ივლისი, 2020</h5>
          <p className="sales__slider__preview">
            ეწვიეთ ავერსს და ისარგებლეთ ჩიპოლინოს საბავშვო პროდუქციაზე 20%-იანი
            ფასდაკლებით
          </p>
        </SwiperSlide>
        <SwiperSlide className="sales__slider">
          <img className="sales__slider__img" src={chipolino} />
          <h5 className="sales__slider__date">10 ივლისი, 2020</h5>
          <p className="sales__slider__preview">
            ეწვიეთ ავერსს და ისარგებლეთ ჩიპოლინოს საბავშვო პროდუქციაზე 20%-იანი
            ფასდაკლებით
          </p>
        </SwiperSlide>
        <SwiperSlide className="sales__slider">
          <img className="sales__slider__img" src={chipolino} />
          <h5 className="sales__slider__date">10 ივლისი, 2020</h5>
          <p className="sales__slider__preview">
            ეწვიეთ ავერსს და ისარგებლეთ ჩიპოლინოს საბავშვო პროდუქციაზე 20%-იანი
            ფასდაკლებით
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Sales;
