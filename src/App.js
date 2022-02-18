import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/Header/Header";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Bike accessories",
    amount: 950,
    date: new Date(2022, 2, 14),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);
  const [userLimit, setUserLimit] = useState(1000);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const setLimitHandler = (Limit) => {
    setUserLimit(Limit);
  };
  return (
    <div className="App">
      <Header />
      <div className="App-section">
        <NewExpense
          onAddExpense={addExpenseHandler}
          onSetLimit={setLimitHandler}
        />
        <Expenses expenses={expenses} setLimit={userLimit} />
      </div>
    </div>
  );
}

export default App;
