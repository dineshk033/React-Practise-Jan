import { useEffect, useState } from "react";
import { AxiosInstance } from "../axios";
import HomeContainer from "../features/homepage";
import Banner from "../features/homepage/banner";
import Card from "../features/homepage/card";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data.products));
    AxiosInstance.get("products").then((res) => setProducts(res.data.products));
  }, []);
  console.log(products);
  return (
    <div className="row">
      <div className="col-md-3 bg-light ">
        <h5>Filter</h5>
      </div>
      <div className="col-md-9">
        <h5>Products list</h5>
        {/* <Banner /> */}
        <div className="row">
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
