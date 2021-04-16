import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter';
import Card from "../UI/Card";

import "./ExpenseList.css";

function ExpenseList({ expenses }) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const expensesList = expenses?.map((expense) => {
		if (expense.date.getFullYear().toString() === filteredYear) {
      return (
        <ExpenseItem
          key={expense.id}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
          expenseTitle={expense.title}
        />
			);
		}
	});
	
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	}


  return (
		<div>
			<Card className="expenses">
				<ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
				{expensesList}
			</Card>
    </div>
  );
}

export default ExpenseList;
