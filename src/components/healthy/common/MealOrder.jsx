import React from "react";
import "./healthyCommon.css";
import knife from "../../../assets/images/healthy/knife.svg";
import glass from "../../../assets/images/healthy/glass.svg";
const MealOrder = ({ text, index, handleMealOrder}) => {
  return (
    <div className="healthyMealOrder" onClick={() => handleMealOrder(text)} >
      {index === 3 ? (
         <img src={glass} alt="" />
      ):(
         <img src={knife} alt="" />
      )}
      <span> {text}</span>
    </div>
  );
};

export default MealOrder;
