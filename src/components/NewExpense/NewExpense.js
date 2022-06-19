import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({addExpense}) => {
  const onSubmitSaveHandle = userEnterdData => {
    const expenseData = {
      ...userEnterdData,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitSave={onSubmitSaveHandle} />
    </div>
  );
};

export default NewExpense;
