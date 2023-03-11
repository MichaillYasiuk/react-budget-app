import { Budget } from './components/Budget/Budget';
import { ExpensesBlock } from './components/Expenses/Expenses';
import { Form } from './components/Form/Form';

import { Wrapper } from './ui/styles';

export const App = () => {
  return (
    <Wrapper>
      <Budget />
      <ExpensesBlock />
      <Form />
    </Wrapper>
  );
};
