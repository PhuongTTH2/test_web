import React from "react";
import HeaderNav from "../../components/healthy/header/HeaderNav";
import Meal from "../../components/healthy/mealHistory/Meal";

import HealthyButton from "../../components/healthy/common/HealthyButton";
import ScrollTop from "../../components/healthy/common/ScrollTop";
import UserFooter from "../../components/healthy/footer/UserFooter";
import "./headthy.css";
import {
  recommendList,
  mealRecommented,
} from "../../components/healthy/datadummy/test";
const HeadlthyList = () => {
  return (
    <div>
      <HeaderNav />
      {/* <div></div> */}
      <div style={{ marginTop: "120px" }}>
        <div className="headthyMenu__meal-list-recommend">
          {recommendList.map((item) => (
            <Meal check="recommend" text={item.text} info={item.info} />
          ))}
        </div>
        <div className="headthyMenu__meal-list">
          {mealRecommented.map((item) => (
            <Meal
              check="list"
              img={item.img}
              text={item.text}
              info={item.info}
              moreInfo="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
            />
          ))}
        </div>
      </div>
      <div className="headthyMenu__button-center">
        <HealthyButton
          text="記録をもっと見る"
          cursor="pointer"
          padding="28px 148px"
          background="linear-gradient(#FFCC21, #FF963C)"
          border-radius="10px"
          border="none"
        />
      </div>
      <ScrollTop />

      <div>
        <UserFooter />
      </div>
    </div>
  );
};

export default HeadlthyList;
