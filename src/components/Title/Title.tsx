import { StyledTitle } from './styles';

interface TitleProps {
  titleName: string;
}

export const Title = ({ titleName }: TitleProps) => {
  return <StyledTitle>{titleName}</StyledTitle>;
};
