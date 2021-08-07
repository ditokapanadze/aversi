import React, { useEffect, useState } from "react";
import CatalogueFilters from "../components/CatalogueFilters";
import CatalogueItems from "../components/CatalogueItems";
import CatalogueHeader from "../components/CatalogueHeader";
import "./Catalogue.css";
import axios from "axios";

function Catalogue() {
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log("test");
    axios
      .get(`http://localhost:5000/api/product/getproducts/${page}`)
      .then((res) => {
        setProduct(res.data.data);
        setPages(res.data.numberOfPages);
      })
      .catch((err) => console.log(err.response));
  }, [page]);
  const decrement = () => {
    page > 1 && setPage((prevState) => prevState - 1);
  };
  const increment = () => {
    page + 1 <= pages && setPage((prevState) => prevState + 1);
  };
  return (
    <>
      <CatalogueHeader />
      <div className="catalogue">
        <CatalogueFilters />
        <div className="catalogue__container">
          {product.map((item) => (
            <CatalogueItems
              photoUrl={item.photo}
              name={item.name}
              type={item.type}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="pages">
        {" "}
        <i onClick={decrement} class="fas fa-chevron-left"></i> <p>{page}</p>
        <i onClick={increment} class="fas fa-chevron-right"></i>
      </div>
    </>
  );
}

export default Catalogue;
