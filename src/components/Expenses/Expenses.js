import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import styles from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((filteredExpense) => {
    return filteredExpense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={styles.expenses}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilterYear={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
