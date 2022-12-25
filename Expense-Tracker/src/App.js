import { useState } from 'react';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

function App() {
  let expenses = [
    {
      name: 'Food1',
      price: 60.0,
      date: new Date(2021, 1, 24),
    },
    {
      name: 'Food2',
      price: 65.0,
      date: new Date(2021, 3, 8),
    },
    {
      name: 'Food3',
      price: 50.0,
      date: new Date(2021, 6, 28),
    },
    {
      name: 'Food4',
      price: 25.0,
      date: new Date(2021, 8, 4),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense);
  };

  return (
    <div>
      <h2>Expense Tracker React App</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
