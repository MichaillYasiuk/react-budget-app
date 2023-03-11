import styled from 'styled-components';
import { Color } from '../../ui/Colors';

export const SubmitButton = styled.button`
  padding: 15px 0px;
  background: ${Color.DarkBlue};
  border-radius: 10px;
  border: none;
  width: 100%;
  color: ${Color.White};

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
