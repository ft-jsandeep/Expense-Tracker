import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    Title: "",
    Amount: "",
    Date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, Title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, Amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, Date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput({
      Title: "",
      Amount: "",
      Date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="new-expense__title">Title</label>
          <input
            type="text"
            id="new-expense__title"
            onChange={titleChangeHandler}
            value={userInput.Title}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="new-expense__amount">Amount</label>
          <input
            type="number"
            id="new-expense__amount"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={userInput.Amount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="new-expense__date">Date</label>
          <input
            type="date"
            id="new-expense__date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={userInput.Date}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
