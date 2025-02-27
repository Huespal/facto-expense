'use client';

import StyledComponentsRegistry from '@/core/layout/registry';
import baseTheme from '@/core/theme/base';
import GlobalStyle from '@/core/theme/GlobalStyle';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider theme={baseTheme}>
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  </ThemeProvider>
);

export default Providers;
