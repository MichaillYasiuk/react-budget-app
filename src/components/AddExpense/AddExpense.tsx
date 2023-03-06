import { Form } from 'components/Form/Form';
import { Title } from 'components/Title/Title';
import { StyledAddExpense } from './styles';

export const AddExpense = () => {
  return (
    <StyledAddExpense>
      <Title titleName="Add Expense" />
      <Form />
    </StyledAddExpense>
  );
};
