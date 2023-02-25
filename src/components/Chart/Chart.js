import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.lable}
          maxValue={null}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
