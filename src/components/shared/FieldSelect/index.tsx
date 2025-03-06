import {
  FieldSelectInputStyled, FieldSetStyled
} from '@/components/shared/FieldSelect/styles';
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
  inline?: boolean;
  error?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

// The shared component to display a select.
// It accepts multiples properties to properly handle its behaviour.
const FieldSelect = <T,>({
  id,
  name,
  options,
  children,
  legend,
  value,
  initialText,
  mb,
  inline = false,
  error = false,
  onChange
}: FieldSelectProps<T>) => (
  <FieldSetStyled $mb={mb} $inline={inline}>
    {legend && <label htmlFor={id}>{legend}</label>}
    <FieldSelectInputStyled
      id={id}
      value={value}
      name={name}
      $error={error}
      onChange={onChange}
    >
      {(!value && initialText) && (
        <option value="" hidden>{` ${initialText}`}</option>
      )}
      {options.length > 0 && options.map(children)}
    </FieldSelectInputStyled>
  </FieldSetStyled>
);

export default FieldSelect;
