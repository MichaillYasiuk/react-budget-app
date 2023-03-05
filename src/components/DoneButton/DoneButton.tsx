import React, { ButtonHTMLAttributes } from 'react';
import { StyledDoneButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled: boolean;
}

export const DoneButton = ({ type, isDisabled }: ButtonProps) => {
  return (
    <StyledDoneButton type={type} disabled={isDisabled}>
      Done
    </StyledDoneButton>
  );
};
