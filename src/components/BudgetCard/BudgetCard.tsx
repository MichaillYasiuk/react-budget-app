import { StyledBudgetCard, CardTitle, Button } from './styles';

export const BudgetCard = () => {
  return (
    <StyledBudgetCard>
      <CardTitle>Budget: $3000</CardTitle>
      <Button>Edit</Button>
    </StyledBudgetCard>
  );
};
