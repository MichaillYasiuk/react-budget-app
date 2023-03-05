import { useExpensesContext } from '../../context/ExpensesContext/ExpensesContext';
import { StyledExpenseList } from './styles';

export const ExpenseList = () => {
  const { expenses, deleteExpense } = useExpensesContext();
  return (
    <ul>
      {expenses.map(({ id, name, cost }) => {
        return (
          <StyledExpenseList>
            <span>{name}</span>
            <span>${cost}</span>
            <button onClick={() => deleteExpense(id)}>X</button>
          </StyledExpenseList>
        );
      })}
    </ul>
  );
};
