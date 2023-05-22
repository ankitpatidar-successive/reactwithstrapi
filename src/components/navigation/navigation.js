import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import ProductList from "../ProductList";

const Navigation = () => {
  return (
    <div className="manu-link">
      <table className="table">
        <tr>
          <th>
            <a href="/">Home</a>
          </th>
          <th>
            <a href="/login">Login</a>
          </th>
          <th>
            <a href="/registration">Registration</a>
          </th>
          <th>
            <a href="/productlist">Products</a>
          </th>
          <th>
            <a href="/categories">Categories</a>
            <select name="forma">
              <option value="Home">
                <a href="/home">Home</a>
              </option>
              <option value="Contact">
                <a href="https://test.com/en">Contact</a>
              </option>
              <option value="Sitemap">
                <a href="sitemap.php">Sitemap</a>
              </option>
            </select>
          </th>
          <th>
            <a href="/navigation">Navigation</a>
          </th>
        </tr>
      </table>
    </div>
  );
};
export default Navigation;
