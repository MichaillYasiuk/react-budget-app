import { ReactNode } from 'react';

export interface ExpensesContextProviderProps {
  children: ReactNode;
}

export interface ExpensesContextValue {
  expenses: Expense[];
  addNewExpense: (expense: Expense) => void;
  deleteExpense: (id: number) => void;
}

interface Expense {
  id: number;
  name: string;
  cost: number;
}
