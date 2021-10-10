import React from "react";
import "./ProductAnotation.css";

function ProductAnotation({ anotation }) {
  return (
    <div className="product__anotation">
      <div className="anotation__title">
        <p className="anotation__title__item active">ანოტაცია</p>
      </div>

      <div className="anotation">
        <p>{anotation}</p>
      </div>
    </div>
  );
}

export default ProductAnotation;
