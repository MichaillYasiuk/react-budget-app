import styled from 'styled-components';
import { Color } from '../../ui/Colors';

export const StyledForm = styled.form`
  display: grid;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 15px 20px;
  border: none;
  max-width: 100%;
  height: 50px;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &::placeholder {
    color: ${Color.Grey};
    font-family: Inter;
    font-size: 16px;
  }
`;

export const AttentionMassage = styled.span`
  color: ${Color.Red};
`;
