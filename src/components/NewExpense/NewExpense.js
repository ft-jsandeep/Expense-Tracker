import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseLimit from "./ExpenseLimit";
import styles from "./NewExpense.module.css";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const changeUserLimitHandler = (userLimit) => {
    props.onSetLimit(userLimit);
  };

  return (
    <div className={styles["new-expense"]}>
      <ExpenseLimit onChangeUserLimit={changeUserLimitHandler} />
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
