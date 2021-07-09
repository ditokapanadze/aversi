import React, { useEffect, useState } from "react";
import "./Sales.css";
import "./SaleLeaders.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import medicine from "../assets/medicine.png";
import chipolino from "../assets/chipolino.png";
import useWindowDimensions from "./useWindowDimensions";
SwiperCore.use([Navigation, Pagination]);

function Sales() {
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
    <div className="sales">
      <h2>მიმდინარე აქციები</h2>
      <Swiper
        spaceBetween={space}
        slidesPerView={slidesNumber}
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
