import React from "react";
import "./lineChart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
} from "recharts";
const data = [
  {
    name: "6",
    uv: 100,
    pv: 100,
  },
  {
    name: "7",
    uv: 90,
    pv: 90,
  },
  {
    name: "8",
    uv: 85,
    pv: 80,
  },
  {
    name: "9",
    uv: 75,
    pv: 70,
  },
  {
    name: "10",
    uv: 65,
    pv: 60,
  },
  {
    name: "11",
    uv: 55,
    pv: 44,
  },
  {
    name: "12",
    uv: 45,
    pv: 40,
  },
  {
    name: "1",
    uv: 35,
    pv: 30,
  },
  {
    name: "2",
    uv: 25,
    pv: 20,
  },
  {
    name: "3",
    uv: 15,
    pv: 10,
  },
  {
    name: "4",
    uv: 45,
    pv: 40,
  },
  {
    name: "5",
    uv: 45,
    pv: 40,
  },
];

const CLineChart = ({ width, height }) => {
  let newRefWidth = React.useRef()
  const [newWidth, setNewWidth] = React.useState(width)

  setTimeout(() =>{
    let newData = window.innerWidth >= 1920 ? 1280 : width
    setNewWidth(newData)
  },100)
  window.addEventListener("resize", function (event) {
    if( Number(window.innerWidth) >= 1920) {
      newRefWidth.current= 1280
      setNewWidth(1280)
    }
    else {
      setNewWidth(width)
    }
    
  });

  return (
    <div className="lineChart">
      <LineChart width={newWidth} height={height} data={data}>
        <CartesianGrid horizontal={false} fill="#414141" />

        <XAxis dataKey="name" />
        <Line type="" dataKey="pv" stroke="#FFCC21" />
        <Line type="" dataKey="uv" stroke="#8FE9D0" />
      </LineChart>
    </div>
  );
};

export default CLineChart;
