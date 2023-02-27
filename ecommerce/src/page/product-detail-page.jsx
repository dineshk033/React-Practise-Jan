import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AxiosInstance } from "../axios";
import Card from "../features/homepage/card";

const ProductDetailPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    AxiosInstance.get("products").then((res) =>
      setList(res.data.products.filter((_, idx) => idx < 5))
    );
  }, []);
  useEffect(() => {
    // fetch(`https://dummyjson.com/products/${id}`)
    //   .then((res) => res.json())
    //   .then(console.log);
    AxiosInstance.get(`products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  return (
    <>
      {product ? (
        <div className="row mt-3 mx-3">
          <div className="col-md-6  " style={{ height: "400" }}>
            <h3>{product.title}</h3>
            <h6>Rs.{product.price}</h6>
          </div>
          <div className="col-md-6  " style={{ height: "400" }}>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger mx-3 my-5">no record found</div>
      )}
      <hr />
      <h5>Similiar Products</h5>
      <div className="row">
        {list.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default ProductDetailPage;
