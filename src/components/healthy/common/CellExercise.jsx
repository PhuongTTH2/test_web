import React from "react";
import "./healthyCommon.css";

const CellExercise = ({ text, handleMealOrder }) => {
  return (
    <div className="headthyMenu__cellExercise">
      <div className="headthyMenu__cellExercise-li"> 
        <li>家事全般（立位・軽い）</li>
        <span>10 min</span>
      </div>
      <div className="headthyMenu__cellExercise-text"><span>26kcal</span></div>
    </div>
  );
};

export default CellExercise;
