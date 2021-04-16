import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import "./ExpenseItem.css";

function ExpenseItem({ expenseAmount, expenseDate, expenseTitle }) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
			</div>
    </Card>
  );
}

export default ExpenseItem;
