import React, { useState } from 'react';
import { TipsOption } from '../../types/types';
import { BudgetCard } from '../BudgetCard/BudgetCard';
import { CurencySelect } from '../CurencySelect/CurencySelect';
import { RemainingCard } from '../RemainingCard/RemainingCard';

import { SpentCard } from '../SpentCard/SpentCard';
import { Title } from '../Title/Title';
import { StyledBudget } from './styles';

const options: TipsOption[] = [
  { value: 1, label: 'USD' },
  { value: 2, label: 'EUR' },
  { value: 3, label: 'BLR' },
];

export const Budget = () => {
  const [selectedValue, setValue] = useState<TipsOption>(options[0]);
  const onChange = (event: TipsOption | null) => {
    if (event) {
      setValue(event);
    }
  };

  return (
    <StyledBudget>
      <Title titleName="Budget App"></Title>
      <CurencySelect
        value={selectedValue}
        onChange={onChange}
        options={options}
      ></CurencySelect>
      <BudgetCard></BudgetCard>
      <RemainingCard></RemainingCard>
      <SpentCard></SpentCard>
    </StyledBudget>
  );
};
