import React from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesList items={props.expenses} />
    </Card>
  );
}
