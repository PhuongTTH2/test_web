import React from "react";
import "./meal.css";

const Meal = ({ check, img = null, text, info, moreInfo = null }) => {
  return (
    <>
      {check === "recommend" ? (
        <div className="mealRecommend">
          {img != null && (
          <img className="mealRecommend__img" src={img} alt={text} />
          )}
          <div className="mealRecommend__detail">
            <span>{info}</span>
            <div></div>
            <span>{text}</span>
          </div>
        </div>
      ) : (
        <div className="meal">
          {moreInfo === null ? (
            <div style={{ height: "100%", position: "relative" }}>
              <img className="meal__img" src={img} alt={text} />
              <div className="meal__info ">
                <span>{info}</span>
              </div>
            </div>
          ) : (
            <>
              <div style={{ height: "70%", position: "relative" }}>
                <img className="meal__img" src={img} alt={text} />
                <div className="meal__info meal__info_size">
                  <span>{info}</span>
                </div>
              </div>
              <div className="meal-more-info">
                <span>{moreInfo}</span>
                <div className="meal__moreInfo-link" >
                  <span>#魚料理</span>
                  <span>#和食</span>
                  <span>#DHA</span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Meal;
