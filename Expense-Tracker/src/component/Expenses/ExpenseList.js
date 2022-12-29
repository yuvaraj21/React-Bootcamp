import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
  if (props.expense.length === 0) {
    return <h3>No Expense Found</h3>;
  }
  return props.expense.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.name}
        amount={expense.price}
        date={expense.date}
      />
    );
  });
};
export default ExpenseList;
