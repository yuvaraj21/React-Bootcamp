import react from 'react';
import ExpenseForm from './ExoenseForm.js';
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
