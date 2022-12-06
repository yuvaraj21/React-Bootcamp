import ExpenseItem from './component/ExpenseItem';

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Expense Tracker React App</h2>
      <ExpenseItem
        title={expenses[0].name}
        amount={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].name}
        amount={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].name}
        amount={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].name}
        amount={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
