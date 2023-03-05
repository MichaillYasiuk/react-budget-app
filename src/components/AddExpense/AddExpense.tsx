import React, { useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { DoneButton } from '../DoneButton/DoneButton';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title';
import { StyledAddExpense } from './styles';

export const AddExpense = () => {
  const [isDisabled, setisDisabled] = useState(true);
  const person = useInput();
  return (
    <StyledAddExpense>
      <Title titleName="Add Expense"></Title>
      <Input
        placeholder={'enter name...'}
        type={'string'}
        {...person}
        onChange={person.OnChange}
      />
      <Input
        placeholder={'enter cost...'}
        type={'string'}
        {...person}
        onChange={person.OnChange}
      />
      <DoneButton type="button" isDisabled={isDisabled} />
    </StyledAddExpense>
  );
};
