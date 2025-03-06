'use client'

import { SectionStyled } from '@/components/shared/Section/styles';
import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

interface SectionProps {
  children: ReactNode;
  px?: keyof DefaultTheme['space'];
}

// The shared component to display a page section.
const Section = ({ children, px }: SectionProps) => (
  <SectionStyled $px={px}>{children}</SectionStyled>
)

export default Section;