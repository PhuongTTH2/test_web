import React from "react";
import "./healthyCommon.css";

const RCircle = ({ process }) => {
  return (
    <div className="healthy__circle">
      <svg viewBox="0 0 36 36" class="circular-chart">
        <path
          class="circle"
          stroke-dasharray={`${process}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
};

export default RCircle;
