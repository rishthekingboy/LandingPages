import React from "react";
import { SiTurkishairlines } from "react-icons/si";
import { FaTshirt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item footer-label">
        BEST SELLING
        <br />
        SERVICES
      </div>
      <div className="footer-item">
        <div className="footer-item-icon">
          <SiTurkishairlines />
        </div>
        <div className="footer-item-info">CUSTOM PRINGING</div>
      </div>
      <div className="footer-item">
        <div className="footer-item-icon">
          <FaTshirt />
        </div>
        <div className="footer-item-info">FITTING TSHIRT</div>
      </div>
    </div>
  );
};

export default Footer;
