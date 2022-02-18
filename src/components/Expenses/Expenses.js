import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import styles from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  let currentDate = new Date();
  const [filteredYear, setFilteredYear] = useState(
    currentDate.getFullYear().toString()
  );
  const filterChangeHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((filteredExpense) => {
    return filteredExpense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className={styles["expenses-container"]}>
      <Card className={styles.expenses}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilterYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} setLimit={props.setLimit} />
      </Card>
      <ExpensesList items={filteredExpenses} setLimit={props.setLimit} />
    </div>
  );
}
