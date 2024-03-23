import React from "react";
import "./healthyCommon.css";

const MyDiary = ({ text, handleMealOrder}) => {
  return (
    <div className="headthyMenu__dairy">
      <span> 2021.05.21</span>
      <span> 23:25</span>
      <span> 私の日記の記録が一部表示されます。</span>
      <span> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…</span>
    </div>
  );
};

export default MyDiary;
