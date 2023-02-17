import React from "react";
import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.12,
      date: new Date(2021, 8, 1),
    },
    {
      id: "e3",
      title: "New Tv",
      amount: 82.04,
      date: new Date(2022, 6, 12),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 10),
    },
  ];

  /* React code without Jsx */
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get Started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started !</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
