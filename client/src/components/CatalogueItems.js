import React from "react";
import star from "../assets/star.png";
import medicine from "../assets/medicine.png";
import "./CatalogueItems.css";

function CatalogueItems({ photoUrl, name, type, price }) {
  return (
    <div className="catalogue__item">
      <div className="catalogue__item__header">
        <div className="stars">
          {" "}
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
        <i class="far fa-heart"></i>
      </div>
      <img className="catalogue__item__img" src={photoUrl} />
      <h4 style={{ marginBottom: 5 }}>{name}</h4>
      <p className="medicine__review">{type}</p>
      <div className="catalogue__item__footer">
        <h4 className="catalogue__item__price">{price} ლარი</h4>
        <button className="catalogue__item__button">ყიდვა</button>
      </div>
    </div>
  );
}

export default CatalogueItems;
