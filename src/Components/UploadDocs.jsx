import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp_img from "../Assets/Signup_img.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./uploadDocs.css";

const UploadDocs = () => {
  const accessToken = localStorage.getItem("access_token");
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const navigate = useNavigate();
  const handleImageOneChange = (event) => {
    setImageOne(event.target.files[0]);
  };
  const handleImageTwoChange = (event) => {
    setImageTwo(event.target.files[0]);
  };
  const handleContinueClick = (event) => {
    navigate("/setPassword")
    event.preventDefault();
    toast("clicked")
    const formData = new FormData();
    formData.append("ownerId", imageOne);
    formData.append("cacCertificate", imageTwo);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try{
      const response=  axios.post('https://api-laundry-marketplace.onrender.com/api/v1/merchant/documents',formData, config,     )
      console.log(response)
    } catch(error){
      console.log(error.response);
    }
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
          <p className="nin-label">Upload your ID</p>
          <input
            type="file"
            className="upload-file"
            onChange={handleImageOneChange}
          />
          <p className="cac-label">Upload CAC Document</p>
          <input
            type="file"
            className="upload-file"
            onChange={handleImageTwoChange}
          />
          <button className="continueButton-2" onClick={handleContinueClick}>
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadDocs;
