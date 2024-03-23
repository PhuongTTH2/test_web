import React from "react";
import "./healthyCommon.css";
import scrollTop from "../../../assets/images/healthy/scrollTop.svg";
const ScrollTop = () => {

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    let mybutton = document.getElementById("scrolltop");
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {

      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button style={{display:"none"}} className="scrolltop" id="scrolltop" onClick={topFunction}>
      <img src={scrollTop} alt="" />
    </button>
  );
};

export default ScrollTop;
