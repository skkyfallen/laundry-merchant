import React from "react";
import { useState } from "react";

import axios from "axios";
import SignUp_img from "../Assets/Signup_img.png";
import "./setPassword.css";
import { useNavigate } from "react-router-dom";
const SetPassword = () => {
    const navigate= useNavigate('/')
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleContinueClick = (event) => {
    event.preventDefault();
    axios
      .put(
        "https://api-laundry-marketplace.onrender.com/api/v1/auth/merchant/set-password",
        {
          password: password,
          confirmPassword: confirmPassword,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        console.log(accessToken);
        navigate("/merchantLogin")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const accessToken = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return (
    <div className="password-form-Container">
      <div className="img">
        <img src={SignUp_img} alt="merchant-image" />
      </div>
      <form>
        <h1>
          Become a Service provider
          <br /> and earn money
        </h1>

        <p className="password">Password</p>
        <input
          type="text"
          className="form-field"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <p className="confirmPassword">Confirm Password</p>
        <input
          type="text"
          className="form-field"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button className="continueButton-3" onClick={handleContinueClick}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default SetPassword;
