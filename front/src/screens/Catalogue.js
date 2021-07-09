import React from "react";
import CatalogueFilters from "../components/CatalogueFilters";
import CatalogueItems from "../components/CatalogueItems";
import CatalogueHeader from "../components/CatalogueHeader";
import "./Catalogue.css";

function Catalogue() {
  return (
    <>
      <CatalogueHeader />
      <div className="catalogue">
        <CatalogueFilters />
        <div className="catalogue__container">
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
          <CatalogueItems />
        </div>
      </div>
    </>
  );
}

export default Catalogue;
