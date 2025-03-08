'use client'

import { FooterStyled } from '@/components/Footer/styles';
import Button from '@/components/shared/Button';
import { useState } from 'react';

interface FooterProps {
  onChangeTheme: (isDark: boolean) => void;
}

// The component to display a page footer.
// Includes theme switch action button.
const Footer = ({ onChangeTheme }: FooterProps) => {
  const [isDark, setIsDark] = useState(false);
  const onChange = () => {
    onChangeTheme(!isDark);
    setIsDark(!isDark);
  }
  return (
    <FooterStyled>
      <Button onClick={onChange}>{isDark ? '☀︎' : '⏾'}</Button>
      <p>Facto Expense 2025 - All rights reserved</p>
    </FooterStyled>
  );
}

export default Footer;