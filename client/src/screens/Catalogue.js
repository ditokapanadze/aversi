import React, { useEffect, useState } from "react";
import CatalogueFilters from "../components/CatalogueFilters";
import CatalogueItems from "../components/CatalogueItems";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../actions/product";
import CatalogueHeader from "../components/CatalogueHeader";
import "./Catalogue.css";
import axios from "axios";

function Catalogue() {
  // const [product, setProduct] = useState([]);
  const [pages, setPages] = useState("");
  const [page, setPage] = useState(1);

  let dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("test");
  //   axios
  //     .get(`https://aversi.herokuapp.com/api/product/getproducts/${page}`)
  //     .then((res) => {
  //       setProduct(res.data.data);
  //       setPages(test[0]?.numberOfPages);
  //     })
  //     .catch((err) => console.log(err.response));
  // }, [page]);

  const decrement = () => {
    page > 1 && setPage((prevState) => prevState - 1);
  };

  const test = useSelector((state) => state.product);
  console.log(test);
  useEffect(() => {
    dispatch(getProduct(page));
    console.log(test[0]?.data);
  }, [page]);

  const increment = () => {
    page + 1 <= pages && console.log("sd");
    page + 1 <= test[0]?.numberOfPages && setPage((prevState) => prevState + 1);
  };

  console.log(test[0]?.numberOfPages);
  console.log(pages);

  return (
    <>
      <CatalogueHeader />
      <div className="catalogue">
        <CatalogueFilters />
        <div className="catalogue__container">
          {test[0]?.data.map((item) => (
            <CatalogueItems
              key={item._id}
              id={item._id}
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
