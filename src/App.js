import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignUp.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import UploadDocs from "./Components/UploadDocs";
import SetPassword from "./Components/SetPassword.jsx";
import MerchantLogin from "./Components/MerchantLogin";
import MerchantNavbar from "./Assets/Nav/MerchantNavbar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MerchantNavbar />} />
          <Route path="/uploadDetails" element={<UploadDocs />} />
          <Route path="/setPassword" element={<SetPassword />} />
          <Route path="/merchantLogin" element={<MerchantLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
