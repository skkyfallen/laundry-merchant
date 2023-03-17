import React from 'react'
import axios from "axios";
import { useState,} from "react";
import { useNavigate } from "react-router-dom";
import SignUp_img from "../Assets/Signup_img.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./uploadDocs.css"

const UploadDocs = () => {
const navigate = useNavigate();
  const handleContinueClick = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://api-laundry-marketplace.onrender.com/api/v1/auth/merchant/register",
        {
          
        }
      )
      .then((response) => {
        console.log(response.data);
        const access_token= response.data.data.token;
        localStorage.setItem('access_token', access_token);
        toast.success("success");
      })
      .catch((error) => {
        toast.error(error.response);
      });
  };
  return (
    <>
     <ToastContainer />
      <div className="upload-Container">
        <div className="img">
          <img src={SignUp_img} alt="merchant-image" />
        </div>
        <form>
          <h1>
            Become a Service provider
            <br /> and earn money
          </h1>
          <p className="nin-label">Upload your NIN</p>
          <input type="file" className="upload-file" placeholder='Upload NIN'/>

          
          <button className="continueButton-2" onClick={handleContinueClick}>
            Continue
          </button>
        </form>
      </div>
    
    
    
    
    
    
    </>
  )
}

export default UploadDocs