import React, { useState } from "react";
import styles from "./ExpenseLimit.module.css";

export default function ExpenseLimit(props) {
  const [expenseLimit, setExpenseLimit] = useState(1000);

  const inputLimitHandler = (e) => {
    setExpenseLimit(+e.target.value);
  };

  const expenselimitSubmitHandler = (e) => {
    e.preventDefault();
    props.onChangeUserLimit(expenseLimit);
  };

  return (
    <form onSubmit={expenselimitSubmitHandler}>
      <div className={styles.ExpenseLimit}>
        <div className={styles.ExpenseLimit__control}>
          <label>Max Expense Limit</label>
          <input
            type="number"
            min="1"
            step="1"
            placeholder="Default ₹1000"
            onChange={inputLimitHandler}
          />
        </div>
        <div className={styles["ExpenseLimit__action"]}>
          <button type="submit">Set limit</button>
        </div>
      </div>
    </form>
  );
}
