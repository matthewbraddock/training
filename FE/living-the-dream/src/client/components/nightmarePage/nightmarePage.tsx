import React from "react";
import { RainCloud } from "../rainCloud/rainCloud";
import "./nightmarePage.css";
import Header from "../header/header";

const NightmarePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="nightmarePage">
        <RainCloud />
      </div>
    </>
  );
};
export default NightmarePage;
