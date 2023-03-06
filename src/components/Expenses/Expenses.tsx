import { ExpenseList } from 'components/ExpenseList/ExpenseList';
import { Input } from 'components/Input/Input';
import { Title } from 'components/Title/Title';
import { StyledExpenses } from './styles';

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title titleName="Expenses" />
      <Input placeholder="search ..." />
      <ExpenseList />
    </StyledExpenses>
  );
};
