import React from "react";
import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  let expensesContent = (
    <h2 className={styles["expenses-list__fallback"]}>Found no expenses.</h2>
  );
  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className={styles["expenses-list__container"]}>
      <div className={styles["expenses-list__header"]}>
        <p>Details</p>
      </div>
      <ul className={styles["expenses-list"]}>{expensesContent}</ul>
    </div>
  );
}
