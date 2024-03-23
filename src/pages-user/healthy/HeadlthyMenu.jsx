import React from "react";
import HeaderNav from "../../components/healthy/header/HeaderNav";
import UserFooter from "../../components/healthy/footer/UserFooter";
import Meal from "../../components/healthy/mealHistory/Meal";

import HealthyButton from "../../components/healthy/common/HealthyButton";
import CLineChart from "../../components/healthy/chart/CLineChart";
import HealthyImg from "../../components/healthy/common/HealthyImg";
import MealOrder from "../../components/healthy/common/MealOrder";
import ScrollTop from "../../components/healthy/common/ScrollTop";

import d01 from "../../assets/images/healthy/d01.jpg";
import "./headthy.css";
import {
  mealList,
  orderList,
} from "../../components/healthy/datadummy/test";

const HeadlthyMenu = () => {
  const [newMealList, setMewMealList] = React.useState(mealList);
  const handleMealOrder = (e) => {
    let newData = mealList.filter((item) => item.text === e);
    setMewMealList(newData);
  };
  return (
    <div className="headthyMenu-root">
      <HeaderNav />
      <div style={{ marginTop: "64px" }}>
        <div  className="headthyMenu__order-chart" >
          <HealthyImg src={d01} />
          <CLineChart width={589} height={300}/>
        </div>
        <div className="headthyMenu__order-list">
          {orderList.map((item, index) => (
            <MealOrder text={item.text} index={index} handleMealOrder={handleMealOrder} />
          ))}
        </div>
        <div className="headthyMenu__meal-list">
          {newMealList.map((item) => (
            <Meal
              check="list"
              img={item.img}
              text={item.text}
              info={item.info}
            />
          ))}
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
      </div>
      <ScrollTop />
      <UserFooter />
    </div>
  );
};

export default HeadlthyMenu;
