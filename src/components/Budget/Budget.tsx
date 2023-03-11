import { BudgetCard } from '../BudgetCard/BudgetCard';
import { RemainingCard } from '../RemainingCard/RemainingCard';
import { CustomSelect } from '../Select/Select';
import { SpentCard } from '../SpentCard/SpentCard';
import { Title } from '../Title/Title';
import { BudgetTitle, StyledBudget } from './styles';

export const Budget = () => {
  return (
    <StyledBudget>
      <BudgetTitle>
        <Title>Budget App</Title>
        <CustomSelect />
      </BudgetTitle>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBudget>
  );
};
