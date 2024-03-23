import React from "react";
import HeaderNav from "../../components/healthy/header/HeaderNav";
import UserFooter from "../../components/healthy/footer/UserFooter";
import ScrollTop from "../../components/healthy/common/ScrollTop";
import CLineChart from "../../components/healthy/chart/CLineChart";
import HealthyButton from "../../components/healthy/common/HealthyButton";
import MyDiary from "../../components/healthy/common/MyDiary";
import CellExercise from "../../components/healthy/common/CellExercise";

import "./headthy.css";
import {
  mealList,
  myInfo,
  buttonRecord,
} from "../../components/healthy/datadummy/test";

const HeadlthyInfomation = () => {
  const myRecord = React.useRef(null);
  const myExercise = React.useRef(null);
  const myDiary = React.useRef(null);
  const [indexRecord, setIndexRecord] = React.useState(3);
  const handleMealOrder = (e) => {
    const newRef = e;
    if (newRef === "Record") myRecord.current.scrollIntoView({
      behavior: 'auto',
  
  });
    else if (newRef === "Exercise") myExercise.current.scrollIntoView({
      behavior: 'auto',
  });
    else myDiary.current.scrollIntoView({
      behavior: 'auto',
  });
  };
  const handleRecord = (e) => {
    setIndexRecord(e.target.value);
  };
  return (
    <div>
      <HeaderNav />
      <div style={{ marginTop: "120px" }}>
        <div className="headthyMenu__information-list">
          {myInfo.map((item, index) => (
            <>
              <div
                className="headthyMenu__information-list-item"
                onClick={() => handleMealOrder(item.key)}
              >
                <div className="headthyMenu__information-list-item-img">
                  <img className="" src={item.img} alt=""/>
                </div>
                <span>{item.info} </span>
                <HealthyButton
                  text={item.text}
                  value={item.key}
                  cursor="pointer"
                  background="linear-gradient(#FFCC21, #FF963C)"
                  border-radius="2px"
                  font-size="14px"
                  font-weight="300"
                  line-height="20px"
                  color="#FFFFFF"
                  border="none"
                  z-index="2"
                />
              </div>
            </>
          ))}
        </div>
        <div ref={myRecord}></div>
        <div className="headthyMenu__information-record">
          <div className="headthyMenu__information-record-text">
            <h1>MY RECORD </h1>
            <h1>2021.05.21</h1>
          </div>

          <div style={{ position: "relative", margin: "20px 0" }}>
            <CLineChart width={900} height={304}  />
            <div className="headthyMenu__information-record-button">
              {buttonRecord.map((item, index) => (
                <HealthyButton
                  text={item.text}
                  value={index}
                  cursor="pointer"
                  border-radius="10px"
                  border="none"
                  width="56px"
                  height="24px"
                  color={index === indexRecord ? "#FFCC21" : "#FFFFFF"}
                  background={index === indexRecord ? "#FFFFFF" : "#FFCC21"}
                  onClick={(e) => handleRecord(e)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div ref={myExercise}></div>
        <div className="headthyMenu__information-exercise">
          <div className="headthyMenu__information-exercise-text">
            <h1>MY EXERCISE </h1>
            <h1>2021.05.21</h1>
          </div>
          <div className="headthyMenu__information-exercise-list">
            <ul style={{ listStyle: "inside" }}>
              {mealList.map((item, index) => (
                <CellExercise />
              ))}
            </ul>
            <ul style={{ listStyle: "inside" }}>
              {mealList.map((item, index) => (
                <CellExercise />
              ))}
            </ul>
          </div>
        </div>
        {/* <div ref={myDiary}></div> */}
        <div  ref={myDiary} className="headthyMenu__information-diary">
          <h1>MY DAIRY</h1>
          <div className="headthyMenu__information-dairy-list">
            {mealList.map((item, index) => (
              <MyDiary />
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
      </div>

      <ScrollTop />
      <UserFooter />
    </div>
  );
};

export default HeadlthyInfomation;
