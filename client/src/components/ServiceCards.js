import React from "react";
import "./ServiceCards.css";
import cart from "../assets/cart.png";
import doctor from "../assets/doctor.png";
import mtredi from "../assets/mtredi.png";

function ServiceCards() {
  return (
    <div className="service__cards">
      <div className="service__card">
        <img className="service__card__img" src={cart} />
        <h3 className="service__card__title">შეუკვეთე ონლაინ</h3>
        <p className="service__card__text">
          ჩამოტვირთე ავერსის მობილური <br />
          აპლიკაცია ან ისარგებლეთ გლოვოს <br />
          მიტანის სერვისითს
        </p>
      </div>
      <div className="service__card">
        <img className="service__card__img" src={doctor} />
        <h3 className="service__card__title">ექიმთან ჩაწერა</h3>
        <p className="service__card__text">
          ნუ გადადებ ექიმთან ვიზიტს <br /> შორეულ მომავალზე, ჩაეწერე <br />{" "}
          ონლაინ დღესვე
        </p>
      </div>
      <div className="service__card">
        <img className="service__card__img " src={mtredi} />
        <h3 className="service__card__title">მტრედი ბარათი</h3>
        <p className="service__card__text">
          დააგროვე ბონუსები და ამავე <br /> დროს შეიძინე პროდუქცია <br />{" "}
          ფასდაკლებით
        </p>
      </div>
    </div>
  );
}

export default ServiceCards;
