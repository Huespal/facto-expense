'use client'

import { ButtonStyled } from '@/components/Button/styles';
import { ReactNode } from 'react';

interface ButtonProps {
  type?: HTMLButtonElement['type'];
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  type = 'button',
  children,
  onClick
}: ButtonProps) => (
  <ButtonStyled type={type} onClick={onClick}>
    {children}
  </ButtonStyled>
);

export default Button; 