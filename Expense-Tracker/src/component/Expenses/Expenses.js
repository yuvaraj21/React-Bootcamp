import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  let expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
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
    </Card>
  );
};

export default Expenses;
