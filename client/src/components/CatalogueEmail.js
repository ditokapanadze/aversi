import React from "react";
import "./CatalogueEmail.css";

function CatalogueEmail() {
  return (
    <div className="email__sales">
      <p>
        გაიგე პირველმა რა <br /> აქცია ავერსში
      </p>
      <form type="submit">
        <input
          className="email__input"
          type="email"
          placeholder="თქვენი ელ-ფოსტა"
        />
        <button className="email__submit" type="submit">
          <i class="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
}

export default CatalogueEmail;
