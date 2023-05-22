import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navigation from "./navigation/navigation";
import ProductForm from "./Product";
import Login from "./login/Login";
let ProductList = [];

export default ProductList = () => {
  const [product, setproduct] = useState([]);
  const [categories, setCategories] = useState([]);
  let data1;
  //console.log("categories:", categories.data)
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(
        `http://localhost:1337/api/products?populate=*`
      );
      data1 = data.data;
      console.log(
        "🚀 ~ file: ProductList.js:180 ~ getData ~ data:",
        data.data.data
      );
      console.log("dada", data1.data);
      setCategories(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <Navigation/>
        <div className="add-prod">
        <th><button><a href="/productAdd">PRODUCT ADD</a></button></th>
        </div>
      <h1>PRODUCT PAGE </h1>
      <header className=".hCrFnU">
      </header>
      <div className="cantenar">
      {categories?.map((item) => (
        // console.log("Images",item.attributes.Images)
        //console.log("----",item.attributes.images.data[0].attributes.url)

        <div class="product-card">

          <div className="thumbnail">
            <img
              src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`}
            />
          </div>
          <div className="prod-details">
            <h1 className="name">{item.attributes.productName}</h1>
            <span class="price">Price : {item.attributes.price}</span><br/>
            <span>Description : {item.attributes.Description}</span><br/>
            <span className="prod-button">
              <button>Add to Cart</button><br/>
            </span>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
