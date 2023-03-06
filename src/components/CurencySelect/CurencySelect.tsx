import Select from 'react-select';
import { TipsOption } from 'types/types';
import { selectStyles } from './styles';

interface SelectProps {
  options: TipsOption[];
  value: TipsOption;
  onChange: (event: TipsOption | null) => void;
}

export const CurencySelect = ({ options, value, onChange }: SelectProps) => {
  return (
    <Select
      options={options}
      styles={selectStyles}
      onChange={onChange}
      value={value}
      isMulti={false}
    />
  );
};
