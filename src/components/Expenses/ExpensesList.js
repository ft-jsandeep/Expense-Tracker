import React from "react";
import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return (
      <h2 className={styles["expenses-list__fallback"]}>Found no expenses.</h2>
    );
  }

  return (
    <div className={styles["expenses-list__container"]}>
      <div className={styles["expenses-list__header"]}>
        <p>Details</p>
      </div>
      <ul className={styles["expenses-list"]}>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
}
