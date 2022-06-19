import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({content}) => {
  if (content.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No expenses in this year</h2>
    );
  }
  return (
    <ul className="expenses-list">
      {content.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
