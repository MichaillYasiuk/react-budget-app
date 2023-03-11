import styled from 'styled-components';
import { Color } from '../../ui/Colors';

export const StyledBadge = styled.span`
  display: grid;
  place-items: center;
  padding: 2px 0px;
  font-family: Inter;
  font-size: 12px;
  border-radius: 10px;
  width: 60px;
  height: 20px;
  background-color: ${Color.DarkBlue};
  color: ${Color.White};
`;
