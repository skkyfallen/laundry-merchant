import React from "react";
import {MdWindow,} from "react-icons/md"
import {FaWallet} from "react-icons/fa"
import {BsFillCartFill} from "react-icons/bs"
import {RiFileHistoryFill} from "react-icons/ri"
import "./merchantNav.css"
const MerchantNavbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><MdWindow/> Dashboard</li>
          <li><FaWallet/> Wallet </li>
          <li><BsFillCartFill/> Shop</li>
          <li><RiFileHistoryFill/> History</li>
        </ul>
      </nav>

    </>
  );
};

export default MerchantNavbar;
