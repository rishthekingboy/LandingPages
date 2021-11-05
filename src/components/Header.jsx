import React from "react";
import { FaShopware } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <FaShopware />
      </div>
      <ul className="navList">
        <li className="navItem activeNav">Home</li>
        <li className="navItem">About</li>
        <li className="navItem">Services</li>
        <li className="navItem">Pricing</li>
        <li className="navItem">Contact</li>
      </ul>
    </div>
  );
};

export default Header;
