import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignUp.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import UploadDocs from "./Components/UploadDocs";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<UploadDocs />} />
          <Route path="/uploadDetails" element={<UploadDocs/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
