import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveDataExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.floor(Math.random() * 1000).toString(),
      ...enteredExpenseData,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setFormVisibility(false);
  };

  const [formVisibility, setFormVisibility] = useState(false);

  const changeVisibility = () => {
    setFormVisibility(formVisibility ? false : true);
  };

  return (
    <div className="new-expense">
      {!formVisibility && (
        <button onClick={changeVisibility}>Add New Expense</button>
      )}
      {formVisibility && (
        <ExpenseForm
          onSaveExpenseData={saveDataExpenseHandler}
          onChangeVisibility={setFormVisibility}
        />
      )}
    </div>
  );
};

export default NewExpense;
