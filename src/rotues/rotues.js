import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Login from "../components/login/Login";
import Home from '../components/home/home';
import Form from '../components/ragistration/Ragistration';
import Registration from '../components/ragistration/Ragistration';
import ProductDetails from '../components/Product';
import Navigation from '../components/navigation/navigation'
import Footer from '../components/Footer/footer';
import Categories from '../components/Categories/Categories';
import ProductList from '../components/ProductList';
import CartItem from '../components/Categories/cart/CartItem';
import ProductForm from '../components/Product'
    
    const NotFound = () => {
      return <h1>Not Found</h1>;
    };

    function Ankit() {
        return (
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/products" element={<Form/>} />
                <Route path="/navigation" element={<Navigation/>} />
                <Route path="/footer" element={<Footer/>} />
                <Route path="/categories" element={<Categories/>} />
                <Route path="/productlist" element={<ProductList/>} />
                <Route path="/cartItem" element={<CartItem/>} />
                <Route path="/productDetails" element={<ProductDetails/>} />
                <Route path='/productAdd' element={<ProductForm/>} />

                <Route path="*" element={<NotFound/>} />
              </Routes>
            </div>
          </Router>
        );
      }
    
export default Ankit;
