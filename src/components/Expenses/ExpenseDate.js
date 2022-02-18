import React from "react";
import styles from "./ExpenseDate.module.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  return (
    <p className={styles["expense-date"]}>
      {/* <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
      <div className={styles["expense-date__year"]}>{year}</div> */}
      {day}
      <sup className={styles["expense-date__sup"]}>th</sup> {month}
    </p>
  );
}
