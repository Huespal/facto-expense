import {
  FieldSelectInputStyled, FieldSetStyled
} from '@/components/FieldSelect/styles';
import { ChangeEvent, ReactElement } from 'react';
import { DefaultTheme } from 'styled-components';

interface FieldSelectProps<T> {
  id: string;
  name: string;
  options: T[];
  children: (props: T) => ReactElement;
  legend?: string;
  value?: string;
  initialText?: string;
  mb?: keyof DefaultTheme['space'];
  error?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FieldSelect = <T,>({
  id,
  name,
  options,
  children,
  legend,
  value,
  initialText,
  mb,
  error = false,
  onChange
}: FieldSelectProps<T>) => (
  <FieldSetStyled $mb={mb}>
    {legend && <label htmlFor={id}>{legend}</label>}
    <FieldSelectInputStyled
      id={id}
      value={value}
      name={name}
      $error={error}
      onChange={onChange}
    >
      {(!value && initialText) && (
        <option value="" selected hidden>{` ${initialText}`}</option>
      )}
      {options.length > 0 && options.map(children)}
    </FieldSelectInputStyled>
  </FieldSetStyled>
);

export default FieldSelect;
