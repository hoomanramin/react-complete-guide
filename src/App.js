import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [enterdExpenses, setEnterdExpenses] = useState("");

  const expenses = [
    {
      id: 1,
      title: "car insurance",
      amount: 100.2,
      date: new Date(2022, 7, 26),
    },
    {
      id: 2,
      title: "keyboard",
      amount: 90.2,
      date: new Date(2022, 7, 26),
    },
    {
      id: 3,
      title: "havij",
      amount: 8,
      date: new Date(2022, 7, 26),
    },
  ];
  const addExpenseHandle = expenses => {
    setEnterdExpenses([expenses]);
  };
  return (
    <div className="App">
      <NewExpense addExpense={addExpenseHandle} />
      <Expenses expenses={enterdExpenses} />
    </div>
  );
}

export default App;
