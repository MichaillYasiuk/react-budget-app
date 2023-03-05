import styled from 'styled-components';

const StyledBudgetCard = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  width: 335px;
  background-color: #7cc6fe;
  border-radius: 15px;
`;

const Subtitle = styled.h4`
  font-size: 20px;
`;

export { StyledBudgetCard, Subtitle };
