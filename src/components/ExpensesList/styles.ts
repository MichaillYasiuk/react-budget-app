import styled from 'styled-components';

export const StyledExpensesList = styled.ul<{ $isExpensesLength: boolean }>`
  padding: 0;
  width: 100%;
  overflow: ${({ $isExpensesLength }) =>
    $isExpensesLength ? 'scroll' : 'hidden'};
  overflow-x: hidden;
`;

export const InputMessage = styled.div`
  font-family: Inter;
  font-size: 20px;
`;

export const SearchMessage = styled.p`
  display: grid;
  place-items: center;
  font-family: Inter;
  font-size: 20px;
`;
