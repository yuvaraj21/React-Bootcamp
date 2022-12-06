import React from 'react';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Product</h2>
        <div className="expense-item__price">$ 58.6</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
