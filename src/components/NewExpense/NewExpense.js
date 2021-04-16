import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ onAddNewExpense }) {
	const saveExpenseDataHanlder = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}

		onAddNewExpense(expenseData);
	}
	
	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />
		</div>
	);
}

export default NewExpense;