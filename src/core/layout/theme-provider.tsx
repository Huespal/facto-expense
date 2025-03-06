'use client';

import StyledComponentsRegistry from '@/core/layout/registry';
import baseTheme from '@/core/theme/base';
import GlobalStyle from '@/core/theme/GlobalStyle';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface ProvidersProps {
  children: ReactNode;
}

// Theme related Providers including:
// - Styled Components theme provider
// - Styled Components registry
// - Styled Components global styles
const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider theme={baseTheme}>
    <StyledComponentsRegistry>
      <GlobalStyle />
      {children}
    </StyledComponentsRegistry>
  </ThemeProvider>
);

export default Providers;
