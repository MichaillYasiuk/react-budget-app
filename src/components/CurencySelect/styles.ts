import { StylesConfig } from 'react-select';
import { TipsOption } from '../../types/types';

export const selectStyles: StylesConfig<TipsOption> = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: 'none',
    borderRadius: '30px',
    height: '30px',
    width: '120px',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: '14px',
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    border: 'none',
    boxShadow: 'none',
  }),
  option: (baseStyles) => ({
    ...baseStyles,
    width: '100px',
    height: '25px',
    display: 'grid',
    placeItems: 'center',
  }),
};
