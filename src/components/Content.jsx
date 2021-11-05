import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Content.css";
import tshirt from "../assets/tshirt.png"
const Content = () => {
  return (
    <div className="content">
      <div className="content-text">
        <div className="content-text-title">
          NYC'S FAVOURITE
          <br />
          TSHIRT SHOP.
        </div>
        <div className="content-text-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          assumenda quia distinctio cumque iure ipsam itaque laudantium quis
          labore neque
        </div>
        <div className="appointmentBtn">
          <span>SHOP NOW</span> <AiOutlineArrowRight />
        </div>
      </div>
      <div className="content-img">
          <img src={tshirt} alt="tshirt" />
      </div>
    </div>
  );
};

export default Content;
