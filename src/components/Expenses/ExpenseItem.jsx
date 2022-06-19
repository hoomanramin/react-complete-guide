import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
const ExpenseItem = ({ date, title, amount }) => {
  const [titleState, setTitleState] = useState(title)



  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{titleState}</h2>
          <div className='expense-item__price'>
            ${amount}
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;