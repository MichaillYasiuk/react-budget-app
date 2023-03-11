import styled from 'styled-components';
import { Color } from '../../ui/Colors';

export const StyledBudgetCard = styled.div`
  display: grid;
  grid-template-columns: 75% 10%;
  align-items: center;
  padding: 0 0 0 20px;
  font-family: Inter;
  font-size: 20px;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  background-color: ${Color.Blue};
`;

export const Button = styled.button`
  padding: 10px 30px;
  font-family: Inter;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  width: 85px;
`;

export const Input = styled.input`
  max-width: 160px;
  border: none;
  background-color: ${Color.Blue};
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }

  ::placeholder {
    text-align: left;
    font-family: Inter;
    font-size: 20px;
    color: ${Color.White};
  }
`;

export const Title = styled.span``;
