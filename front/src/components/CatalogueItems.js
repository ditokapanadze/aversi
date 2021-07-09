import React from "react";
import star from "../assets/star.png";
import medicine from "../assets/medicine.png";
import "./CatalogueItems.css";

function CatalogueItems() {
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
      <img className="catalogue__item__img" src={medicine} />
      <h4 style={{ marginBottom: 5 }}>დ-პანტენოლი</h4>
      <p className="medicine__review">კრემი გარე გამოყენებისთვის</p>
      <div className="catalogue__item__footer">
        <h4 className="catalogue__item__price">8.50 ლარი</h4>
        <button className="catalogue__item__button">ყიდვა</button>
      </div>
    </div>
  );
}

export default CatalogueItems;
