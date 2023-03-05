import React from 'react';
import { StyledTitle } from './styles';

interface TitleNameProps {
  titleName: string;
}

export const Title = ({ titleName }: TitleNameProps) => {
  return <StyledTitle>{titleName}</StyledTitle>;
};
