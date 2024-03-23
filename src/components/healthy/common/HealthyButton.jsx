import React from "react";

const HealthyButton = ({ text, onClick,value, ...rest}) => {
  return (
    <button onClick={onClick} value={value} style={{...rest}}> {text} </button>
  );
};

export default HealthyButton;
