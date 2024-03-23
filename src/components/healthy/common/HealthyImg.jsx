import React from "react";
import "./healthyCommon.css";
import RCircle from './RCircle'

const HealthyImg = ({ src }) => {
  const process = 75
  return (
    <div className="healthyImg">
      <img src={src} alt="" />
      <RCircle process={process}/>
      <div className="healthyImg__circle">
        <div>
        <p>05/21</p><span >{process}%</span>
        </div>
      </div>
    </div>
  );
};

export default HealthyImg;
