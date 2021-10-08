import React, { useState, useEffect } from "react";
import CatalogueEmail from "./CatalogueEmail";
import "./CatalogueFilters.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../actions/product";

function CatalogueFilters() {
  const [filter, setFilter] = useState("");

  let dispatch = useDispatch();

  const filterProduct = (e) => {
    setFilter(e);
  };

  useEffect(() => {
    const page = 0;
    console.log(filter);
    dispatch(getProduct(page, filter));
  }, [filter]);
  return (
    <div>
      {}
      <div className="filter">
        <p>გაფილტვრა</p>
        <label class="container">
          ინფექციების საწინააღმდეგო
          <input
            type="radio"
            name="radio"
            value="ინფექციების საწინააღმდეგო"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ანთების საწინააღმდეგო
          <input
            type="radio"
            name="radio"
            value="ანთების საწინააღმდეგო"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ნევროლოგიური
          <input
            type="radio"
            name="radio"
            value="ნევროლოგიური"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ჰორმონალურ ცვლაზე მოქმედი
          <input
            type="radio"
            name="radio"
            value="ჰორმონალურ ცვლაზე მოქმედი"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ნივთიერებათა ცვლაზე მოქმედი
          <input
            type="radio"
            name="radio"
            value="ნივთიერებათა ცვლაზე მოქმედი"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          გულ-სისხლძარღვთა
          <input
            type="radio"
            name="radio"
            value="გულ-სისხლძარღვთა"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          შარდ-სასქესო
          <input
            type="radio"
            name="radio"
            value="შარდ-სასქესო"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          სასუნთქი სისტემა
          <input
            type="radio"
            name="radio"
            value="სასუნთქი სისტემა"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          კუჭ-ნაწლავი
          <input
            type="radio"
            name="radio"
            value="კუჭ-ნაწლავი"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          დერმატოლოგიური
          <input
            type="radio"
            name="radio"
            value="დერმატოლოგიური"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          ოფთალმოლოგიური
          <input
            type="radio"
            name="radio"
            value="ოფთალმოლოგიური"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          ჰომეოპათიური
          <input
            type="radio"
            name="radio"
            value="ჰომეოპათიური"
            onChange={(e) => filterProduct(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
      </div>
      <CatalogueEmail />
    </div>
  );
}

export default CatalogueFilters;
