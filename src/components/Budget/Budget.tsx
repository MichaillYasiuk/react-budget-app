import { BudgetCard } from 'components/BudgetCard/BudgetCard';
import { CurencySelect } from 'components/CurencySelect/CurencySelect';
import { RemainingCard } from 'components/RemainingCard/RemainingCard';
import { SpentCard } from 'components/SpentCard/SpentCard';
import { Title } from 'components/Title/Title';
import { useState } from 'react';
import { TipsOption } from 'types/types';
import { StyledBudget, CardGroup } from './styles';

const options: TipsOption[] = [
  { value: '1', label: 'USD' },
  { value: '2', label: 'EUR' },
  { value: '3', label: 'BLR' },
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
      <Title titleName="Budget App" />
      <CurencySelect
        value={selectedValue}
        onChange={onChange}
        options={options}
      ></CurencySelect>
      <CardGroup>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </CardGroup>
    </StyledBudget>
  );
};
