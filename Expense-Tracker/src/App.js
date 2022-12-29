import { useState } from 'react';
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

function App() {
  let dummy_expenses = [
    {
      id: 1,
      name: 'Food1',
      price: 60.0,
      date: new Date(2020, 1, 24),
    },
    {
      id: 2,
      name: 'Food2',
      price: 65.0,
      date: new Date(2021, 3, 8),
    },
    {
      id: 3,
      name: 'Food3',
      price: 50.0,
      date: new Date(2021, 6, 28),
    },
    {
      id: 4,
      name: 'Food4',
      price: 25.0,
      date: new Date(2021, 8, 4),
    },
  ];

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log([...prevExpenses, expense]);
      return [...prevExpenses, expense];
    });
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
