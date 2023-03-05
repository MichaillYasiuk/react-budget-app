import React from 'react';
import { AddExpense } from './components/AddExpense/AddExpense';
import { Budget } from './components/Budget/Budget';
import { Expenses } from './components/Expenses/Expenses';
import { StyledApp } from './ui/style';

export const App = () => {
  return (
    <StyledApp>
      <Budget />
      <Expenses />
      <AddExpense />
    </StyledApp>
  );
};
