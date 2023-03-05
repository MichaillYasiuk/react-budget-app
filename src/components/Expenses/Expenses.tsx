import React from 'react';
import { useInput } from '../../hooks/useInput';
import { ExpenseList } from '../ExpenseList.tsx/ExpenseList';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title';
import { StyledExpenses } from './styles';

export const Expenses = () => {
  const person = useInput();
  return (
    <StyledExpenses>
      <Title titleName="Expenses"></Title>
      <Input
        placeholder={'search...'}
        type={'string'}
        {...person}
        onChange={person.OnChange}
      />
      <ExpenseList></ExpenseList>
    </StyledExpenses>
  );
};
