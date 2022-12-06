import Expenses from './component/Expenses';

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
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
