import {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSubmitSave}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [inputData, setInputData] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = e => {
    setTitle(e.target.value);
    // setInputData(pervState => {
    //   return {...pervState, title: e.target.value};
    // });
  };
  const amountChangeHandler = e => {
    // setInputData(pervState => {
    //   return {...pervState, amount: e.target.value};
    // });
    setAmount(e.target.value);
  };
  const dateChangeHandler = e => {
    // setInputData(pervState => {
    //   return {...pervState, date: e.target.value};
    // });
    setDate(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    const userEnterdData = {title, amount, date: new Date(date)};
    setTitle("");
    setAmount("");
    setDate("");
    onSubmitSave(userEnterdData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={titleChangeHandler}
            value={title}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            required
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            required
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
