import React, { useState } from 'react';
import { EditButton } from '../EditButton/EditButton';
import { StyledBudgetCard, Subtitle } from './styles';

export const BudgetCard = () => {
  const [isDisabled, setisDisabled] = useState(true);

  return (
    <StyledBudgetCard>
      <Subtitle>Budget:$3000</Subtitle>
      <EditButton type="button" isDisabled={isDisabled} />
    </StyledBudgetCard>
  );
};
