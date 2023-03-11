import styled from 'styled-components';
import { Color } from '../../ui/Colors';

export const Input = styled.input`
  max-width: 100%;
  height: 50px;
  padding: 15px 20px;
  border: none;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &::placeholder {
    text-align: left;
    font-family: Inter;
    font-size: 16px;
    color: ${Color.Grey};
  }
`;
