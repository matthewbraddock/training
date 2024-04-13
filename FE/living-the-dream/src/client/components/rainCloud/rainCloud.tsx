import React from "react";
import "./rainCloud.css";

export const RainCloud = () => {
  return (
    <div className="container">
      <div className="cloud"></div>
      <div className="eyes">
        <span></span> <span></span>
      </div>
      <div className="mouth"></div>
      <div className="tears"></div>
      <div className="rain">
        <div className="rainDrop"></div>
        <div className="rainDrop"></div>
        <div className="rainDrop"></div>
        <div className="rainDrop"></div>
        <div className="rainDrop"></div>
      </div>
    </div>
  );
};
