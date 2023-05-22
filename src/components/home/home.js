import React from "react";
import "../../App.css";
import ProductList from "../ProductList";

function Home() {
  const categories = ProductList();

  return (
    <div className="main-nav">
      <div>
        <ProductList/>
      </div>
      <h1>Welcome to the Home page!</h1>
    </div>
  );
}

export default Home;
