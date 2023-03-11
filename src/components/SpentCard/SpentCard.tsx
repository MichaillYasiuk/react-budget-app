import React, { useContext } from 'react';
import { CurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { ExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
import { StyledSpentCard } from './styles';

export const SpentCard = () => {
  const { currency } = useContext(CurrencyContext);
  const { expenses } = useContext(ExpensesContext);

  const total = expenses.reduce((acc, { cost }) => acc + +cost, 0);

  return (
    <StyledSpentCard>
      Spent so far: {currency}
      {total}
    </StyledSpentCard>
  );
};
