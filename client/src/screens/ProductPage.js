import React, { useState, useEffect } from "react";
import ProductAnotation from "../components/ProductAnotation";
import ProductInfo from "../components/ProductInfo";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const [product, setProduct] = useState([]);
  let param = useParams();
  console.log(param);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/product/getproduct/${param.id}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.log(err));
  }, [param]);
  console.log(product);
  return (
    <>
      <ProductInfo
        id={product._id}
        photo={product.photo}
        name={product.name}
        price={product.price}
        type={product.type}
        country={product.country}
        producer={product.producer}
        code={product.code}
        form={product.form}
      />
      <ProductAnotation anotation={product.anotation} />
    </>
  );
}

export default ProductPage;
