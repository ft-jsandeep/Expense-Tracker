import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseLimit from "./ExpenseLimit";
import styles from "./NewExpense.module.css";

export default function NewExpense(props) {
  const [maxLimit, setmaxLimit] = useState(1000);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const changeUserLimitHandler = (userLimit) => {
    setmaxLimit(userLimit);
    props.onSetLimit(userLimit);
  };

  return (
    <div className={styles["new-expense"]}>
      <ExpenseLimit onChangeUserLimit={changeUserLimitHandler} />
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <div className={styles["max-expense-limit"]}>
        <h4>Current limit:</h4>
        <p>{maxLimit}</p>
      </div>
    </div>
  );
}
