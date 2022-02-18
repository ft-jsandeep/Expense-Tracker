import React, { useState } from "react";
import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  const [expenseDisplay, setexpenseDisplay] = useState(true);
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

  const displaySizeHandler = () => {
    setexpenseDisplay((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={styles["expenses-list__container"]}>
      <div className={styles["expenses-list__header"]}>
        <p>Details</p>
        <div
          className={`${styles["menu-btn"]} ${!expenseDisplay && styles.open}`}
          onClick={displaySizeHandler}
        >
          <div className={styles["menu-btn__burger"]}></div>
        </div>
      </div>
      <ul
        className={`${styles["expenses-list"]} ${
          expenseDisplay && styles.close
        }`}
      >
        {expensesContent}
      </ul>
    </div>
  );
}
