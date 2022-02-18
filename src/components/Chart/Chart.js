import React from "react";

import ChartBar from "./ChartBar";
import styles from "./Chart.module.css";

export default function Chart(props) {
  let userMax = props.setLimit; // Set by user currently static; will be dynamic and taken as input ny user
  console.log(userMax);
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  // let totalMaximum = Math.max(...dataPointValues);
  // if(totalMaximum < userMax)
  //     totalMaximum = userMax;
  // totalMaximum = Math.max(userMax, totalMaximum);
  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={userMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
