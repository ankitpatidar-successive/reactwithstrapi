import React from "react";
import "../../App.css";

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
          </th>
        </tr>
      </table>
    </div>
  );
};
export default Navigation;
