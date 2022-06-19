import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {

  const [selectedYear, setSelectedYear] = useState('2022')

  const addFilterHandler = (filterValue) => {
    setSelectedYear(filterValue)
  }
  const filterdExpense = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter selectedYear={selectedYear} addFilter={addFilterHandler} />
        <ExpensesChart expenses={filterdExpense} />
        <ExpensesList content={filterdExpense} />
      </Card>
    </>

  );
}

export default Expenses;