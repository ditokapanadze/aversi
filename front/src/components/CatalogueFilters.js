import React from "react";
import CatalogueEmail from "./CatalogueEmail";
import "./CatalogueFilters.css";

function CatalogueFilters() {
  return (
    <div>
      {}
      <div className="filter">
        <p>გაფილტვრა</p>
        <label class="container">
          ინფექციების საწინააღმდეგო
          <input type="checkbox" value="infection" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ანთების საწინააღმდეგო
          <input type="checkbox" vale="inflammation" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ნევროლოგიური
          <input type="checkbox" value="neurological" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ჰორმონალურ ცვლაზე მოქმედი
          <input type="checkbox" value="hormones" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ნივთიერებათა ცვლაზე მოქმედი
          <input type="checkbox" value="tachytrophism" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          გულ-სისხლძარღვთა
          <input type="checkbox" value="cardiovascular" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          შარდ-სასქესო
          <input type="checkbox" value="hematuria" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          სასუნთქი სისტემა
          <input type="checkbox" value="respiratory" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          კუჭ-ნაწლავი
          <input type="checkbox" value="bowels" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          დერმატოლოგიური
          <input type="checkbox" value="dermatological" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ოფთალმოლოგიური
          <input type="checkbox" value="ophthalmologic" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          მოვლის საგნები
          <input type="checkbox" value="care" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ჰომეოპათიური
          <input type="checkbox" value="homeopathic" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          სისხლისა და სისხწარმოქმნაზე მოქმედი
          <input type="checkbox" value="haemopoiesis" />
          <span class="checkmark"></span>
        </label>
      </div>
      <CatalogueEmail />
    </div>
  );
}

export default CatalogueFilters;
