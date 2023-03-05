import React from 'react';
import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';

export const Form = () => {
  const { addNewExpense } = useExpensesContext();
  return (
    <div>
      <h1>Form</h1>
      <button
        onClick={() =>
          addNewExpense({
            id: 3,
            name: 'toyota camry 3.5',
            cost: 35000,
          })
        }
      >
        Add Expense
      </button>
    </div>
  );
};
