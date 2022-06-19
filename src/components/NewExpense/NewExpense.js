import {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({addExpense}) => {
  const [showForm, setShowForm] = useState(false);
  const onSubmitSaveHandle = userEnterdData => {
    const expenseData = {
      ...userEnterdData,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
    setShowForm(!showForm);
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSubmitSave={onSubmitSaveHandle}
          toggle={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
