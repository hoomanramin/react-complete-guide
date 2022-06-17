import Expenses from "./components/Expenses/Expenses";

function App() {
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

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
