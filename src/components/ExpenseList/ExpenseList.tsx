import { ExpenseItem } from 'components/ExpenseItem/ExpenseItem';
import { useExpensesContext } from 'context';
import { StyledExpenseList } from './styles';

export const ExpenseList = () => {
  const { expenses } = useExpensesContext();

  return (
    <StyledExpenseList>
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </StyledExpenseList>
  );
};
