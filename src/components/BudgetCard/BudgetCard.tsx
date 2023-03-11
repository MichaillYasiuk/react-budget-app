import React, { useContext } from 'react';
import { BudgetContext } from '../../context/BudgetContext/BudgetContext';
import { CurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { useInput } from '../../hooks/useInput';
import { useToggle } from '../../hooks/useToggle';
import { Button, Input, StyledBudgetCard, Title } from './styles';

export const BudgetCard = () => {
  const { value, onChange, setValue } = useInput();
  const [isToggleMode, setIsToggleMode] = useToggle(true);
  const { budget, setBudget } = useContext(BudgetContext);
  const { currency } = useContext(CurrencyContext);

  const handleEdit = () => {
    setIsToggleMode();
  };

  const handleSave = () => {
    setBudget(+value);
    setIsToggleMode();
    setValue('');
  };

  return (
    <StyledBudgetCard>
      {isToggleMode ? (
        <>
          <Title>
            Budget: {currency}
            {budget}
          </Title>
          <Button onClick={handleEdit}>Edit</Button>
        </>
      ) : (
        <>
          <Input
            onChange={onChange}
            value={value}
            type="number"
            placeholder="Enter  budget ..."
          />
          <Button onClick={handleSave}>Save</Button>
        </>
      )}
    </StyledBudgetCard>
  );
};
