import React, { useState } from "react";
import axios from "axios";
import Navigation from "./navigation/navigation";

export default function ProductForm() {
  // States for registration
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setProductName(e.target.value);
    setSubmitted(false);
  };

  // Handling the Price change
  const handlePrice = (e) => {
    setPrice(e.target.value);
    setSubmitted(false);
  };

  // Handling the Description change
  const handleDescription = (e) => {
    setDescription(e.target.value);
    setSubmitted(false);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
    setSubmitted(false);
  };


  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productName === "" ||
      price === "" ||
      quantity === "" ||
      Description === "" ||
      images === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Product {productName} successfully registered!!</h1>
      </div>
    );
  };

  async function fetchText() {
    const option = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  data: {
        productName: productName,
        price: price,
        Description: Description,
        quantity: quantity,
        images : images,
      }, })
  };
    let response = await fetch('http://localhost:1337/api/products', option);
    let data = await response.text();
    console.log(data);
}

  return (
    <>
    <Navigation/>
       <h1>ADD PRODUCT</h1>
      <div>PRODUCT NAME<br/>
        <input onChange={handleName} value={productName} type="text" />
      </div>
      <div>PRICE<br/>
        <input onChange={handlePrice} value={price} type="number" />
      </div>
      <div>DESCRIPTION<br/>
        <input onChange={handleDescription} value={Description} type="text" />
      </div>
      <div>QUANTITY<br/>
        <input onChange={handleQuantity} value={quantity} type="number" />
      </div>
      <div>IMAGE<br/>
      <input value={images} type="file" id="img" name="img" accept="image/*"/>
      </div>
      <div className="login-btn">
        <button onClick={fetchText} type="submit">
          Add Product
        </button>
      </div>
    </>
  );
}
