import React, { useState } from "react";
import axios from 'axios';
import Registration from "../ragistration/Ragistration";
import { Link } from "react-router-dom";
import email from "../images/email.png";
import lock from "../images/lock.png";
import profile from "../images/icon.png";
import "../../components/App.css";

export default function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [formValue, setFormValue] = useState({identifier:'', password:''});

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleAPI = () => {
  axios
  .post('http://localhost:1337/api/auth/local', {
    identifier: formValue.identifier,
    password: formValue.password,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });
};
  return (
    <>
    <div className="manu-link"></div>
    <form className="App">
      <div className="Login">
        <div className="App">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
              <div>
                <h1 className="LHeader">Login</h1>
                <div>
                  <img src={email} alt="emial" className="email" />
                  <input
                    type="email"
                    placeholder="Enter Email-id"
                    className="fill"
                    name="identifier"
                    onChange={handleChange}
                  />
                </div>
                <div className="second-input">
                  <img src={lock} alt="password" className="email" />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="fill"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                {/* HERE WITH THE HELP OF LINK PROVIDED BY REACT-ROUTER WE CAN NAVIGATE TO OTHER PAGES 
                                IN LINK WE HAVE TO PASS LOCATION OF THE NAVIGATING PAGE AS PATH IS DEFINED IN THE APP.JS*/}
                <div className="login-btn">
                  <Link to="/home">
                    <button onClick={handleAPI} type="button">Login</button>
                  </Link>
                </div>
                <div className="reg-link">
                  <Link className="link" to="/registration">
                    <li>Register Now</li>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}
