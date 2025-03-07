import theme from '@/core/theme/base';
import { render as tlrender } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { vi } from 'vitest';

vi.mock('next/font/google', () => ({
  Geist: () => ({
    style: {
      fontFamily: 'mocked'
    }
  }),
  Geist_Mono: () => ({
    style: {
      fontFamily: 'mocked'
    }
  })
}))

export const render = (children: ReactElement) =>
  tlrender(<ThemeProvider theme={theme}>{children}</ThemeProvider>);