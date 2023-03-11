import styled from 'styled-components';
import { Color } from '../../ui/Colors';

export const StyledRemaining = styled.div<{ $overspending: boolean }>`
  display: grid;
  align-items: center;
  padding: 0 20px;
  text-align: left;
  font-family: Inter;
  font-size: 20px;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  background-color: ${({ $overspending }) =>
    $overspending ? Color.Teal : Color.Red};
`;
