import styled from 'styled-components';
import close from '../../assets/icons/close.svg';
import { Color } from '../../ui/Colors';

export const StyledExpensesItem = styled.li`
  display: grid;
  grid-template-columns: 80% 10% 10%;
  align-items: center;
  padding: 10px 20px;
  font-family: Inter;
  font-size: 16px;
  border-bottom: 2px solid ${Color.Violet};
  color: ${Color.Black};
`;

export const DeleteButton = styled.button`
  justify-self: end;
  background: no-repeat url(${close});
  width: 16px;
  height: 16px;
  border: none;
`;
