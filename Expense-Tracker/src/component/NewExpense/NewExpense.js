import React from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveDataExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 1000).toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveDataExpenseHandler} />
    </div>
  );
};

export default NewExpense;
