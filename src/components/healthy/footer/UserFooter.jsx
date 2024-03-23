import React from "react";
import "./userfooter.css";

const footerHealthy = [
  {
    name: "会員登録",
  },
  {
    name: "運営会社",
  },
  {
    name: "利用規約",
  },
  {
    name: "個人情報の取扱について",
  },
  {
    name: "特定商取引法に基づく表記",
  },
  {
    name: "お問い合わせ",
  },
];

const UserFooter = () => {

  return (
    <div>
      <div className="footerhealthy">
         {footerHealthy.map((item, index) => (
           <span>{item.name}</span>
          ))}

      </div>
    </div>
  );
};

export default UserFooter;
