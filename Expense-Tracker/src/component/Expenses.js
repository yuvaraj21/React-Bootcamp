import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const expenses = props.expenses;

  return (
    <div className="expenses">
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
};

export default Expenses;
