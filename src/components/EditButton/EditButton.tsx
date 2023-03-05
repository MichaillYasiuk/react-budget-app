import React, { ButtonHTMLAttributes } from 'react';
import { StyledEditButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled: boolean;
}

export const EditButton = ({ type, isDisabled }: ButtonProps) => {
  return (
    <StyledEditButton type={type} disabled={isDisabled}>
      Edit
    </StyledEditButton>
  );
};
