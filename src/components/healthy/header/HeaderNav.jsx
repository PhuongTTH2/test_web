import React from "react";
import "./headernav.css";
import logo from "../../../logo.svg";
import header1 from "../../../assets/images/healthy/header1.svg";
import header2 from "../../../assets/images/healthy/header2.svg";
import header3 from "../../../assets/images/healthy/header3.svg";
import headerToggle from "../../../assets/images/healthy/headerToggle.svg";
import headerToggleX from "../../../assets/images/healthy/headerToggleX.svg";
import { useNavigate } from 'react-router-dom';

const HeaderNav = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="headerhealthy">
      <div className="headerhealthy__left" onClick={() => navigate('/')} >
        <img src={logo} alt="" />
      </div>
      <div className="headerhealthy__right">
        <div className="headerhealthy__right-item headerhealthy__size" onClick={() => navigate('/')}>
          <img src={header1} alt="" />
          <span  >自分の記録 </span>

        </div>
        <div className="headerhealthy__right-item headerhealthy__size" onClick={() => navigate('/healthy/infomation')} >
          <img src={header2} alt="" />
          <span>チャレンジ</span>
        </div>
        <div className="headerhealthy__right-item headerhealthy__size" onClick={() => navigate('/healthy/list')}>
          <p className="headerhealthy__right-item-badge"> 1 </p>
          <img src={header3} alt="" />
          <span  >お知らせ</span>
        </div>
        <div className="headerhealthy__right-item">
          {!toggle ? (
            <button onClick={() => setToggle(true)}>
              <img src={headerToggle} alt="" />
            </button>
          ) : (
            <>
              <button onClick={() => setToggle(false)}>
                <img src={headerToggleX} alt="" />
              </button>
              <div className="headerhealthy__right-item-toggle">
                <span>自分の記録</span>
                <span>体重グラフ</span>
                <span>目標</span>
                <span>選択中のコース</span>
                <span>コラム一覧</span>
                <span>設定</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
