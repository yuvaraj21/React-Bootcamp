import ExpenseItem from './component/ExpenseItem';

function App() {
  const expenses = [
    {
      name: 'Food1',
      price: 60.0,
      date: 'jan 24 2021',
    },
    {
      name: 'Food2',
      price: 60.0,
      date: 'jan 24 2021',
    },
    {
      name: 'Food3',
      price: 60.0,
      date: 'jan 24 2021',
    },
    {
      name: 'Food4',
      price: 60.0,
      date: 'jan 24 2021',
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
