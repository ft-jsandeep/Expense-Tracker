import React from "react";

import styles from "./ChartBar.module.css";

export default function ChartBar(props) {
  let barFillHeight = "0%";
  let barFillColor = "#598B2C";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100);
  }

  if (barFillHeight > 90) barFillColor = "#DD5303";
  else if (barFillHeight > 50) barFillColor = "#DFA801";

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div
          className={styles["chart-bar__fill"]}
          style={{ height: `${barFillHeight}%`, backgroundColor: barFillColor }}
        ></div>
      </div>
      <div className={styles["chart-bar__label"]}>{props.label}</div>
    </div>
  );
}
