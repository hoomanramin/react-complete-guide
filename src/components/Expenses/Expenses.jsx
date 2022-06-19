import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('2020')

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
        <ExpensesList content={filterdExpense} />
      </Card>
    </>

  );
}

export default Expenses;