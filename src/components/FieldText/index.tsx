'use client'

import { FieldTextStyled, InputStyled } from '@/components/FieldText/styles';
import { ChangeEvent } from 'react';

export interface FieldTextLegendProps {
  value: string;
  isSmall?: boolean;
  text?: string;
}

type InputType = 'text' | 'password' | 'date';

export interface FieldTextProps {
  id: string;
  name: string;
  value?: string | number;
  type?: InputType;
  placeholder?: string;
  legend?: string;
  min?: HTMLInputElement['min'];
  max?: HTMLInputElement['max'];
  error?: boolean;
  inline?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FieldText = ({
  id,
  type = 'text',
  legend,
  error,
  inline = false,
  ...props
}: FieldTextProps) => (
  <FieldTextStyled $inline={inline}>
    {legend && (
      <label htmlFor={id}>{legend}</label>
    )}
    <InputStyled $error={error}>
      <input id={id} type={type} {...props} />
    </InputStyled>
  </FieldTextStyled>
);

export default FieldText;
