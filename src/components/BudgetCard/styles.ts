import styled from 'styled-components';

const StyledBudgetCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  padding: 32px 20px;
  background: #7cc6fe;
  border-radius: 10px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
`;

const Button = styled.button`
  justify-self: right;
  padding: 10px 30px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
  border: none;
`;

export { StyledBudgetCard, CardTitle, Button };
