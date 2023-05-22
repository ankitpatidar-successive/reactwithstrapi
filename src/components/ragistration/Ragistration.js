import React, { useState } from "react";
import axios from "axios";
import Registration from "../ragistration/Ragistration";
import { Link } from "react-router-dom";
import emailcopy from "../images/email.png";
import lock from "../images/lock.png";
import profile from "../images/icon.png";
import userreg from "../images/userreg.png";
import "../../components/App.css";

export default function Form() {
  // States for registration
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
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
        <h1>User {username} successfully registered!!</h1>
      </div>
    );
  };

  const handleAPI = () => {
    console.log(username, email, password);
    axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
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
                    <img src={userreg} alt="profile" className="profile" />
                  </div>
                </div>
                <div>
                  <h1 className="LHeader">User Registration</h1>
                  <div className="second-input">
                    <img src={profile} alt="emial" className="email" />
                    <input
                      onChange={handleName}
                      className="fill"
                      value={username}
                      type="text"
                    />
                  </div>
                  <div className="second-input">
                    <img src={emailcopy} alt="emial" className="email" />
                    <input
                      onChange={handleEmail}
                      className="fill"
                      value={email}
                      type="email"
                    />
                  </div>
                  <div className="second-input">
                    <img src={lock} alt="password" className="email" />
                    <input
                      onChange={handlePassword}
                      className="fill"
                      value={password}
                      type="password"
                    />
                  </div>
                  {/* HERE WITH THE HELP OF LINK PROVIDED BY REACT-ROUTER WE CAN NAVIGATE TO OTHER PAGES 
                                IN LINK WE HAVE TO PASS LOCATION OF THE NAVIGATING PAGE AS PATH IS DEFINED IN THE APP.JS*/}
                  <div className="login-btn">
                    <Link to="/home">
                      <button onClick={handleAPI} type="button">
                        Register Now
                      </button>
                    </Link>
                  </div>
                  <div className="reg-link">
                  <Link className="link" to="/login">
                    <li>Login Now</li>
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
