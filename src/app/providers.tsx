'use client'

import Footer from '@/components/Footer';
import { getQueryClient } from '@/core/helpers/queryClient';
import ThemeProvider from '@/core/layout/theme-provider';
import baseTheme, { BaseTheme } from '@/core/theme/base';
import darkTheme from '@/core/theme/dark';
import {
  dehydrate, HydrationBoundary, QueryClientProvider
} from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

// The application providers including:
// - Styled Components theme provider with theme switch.
// - React Query provider within hydration for SSR.
export default function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  const [theme, setTheme] = useState(baseTheme);

  const onChangeTheme = (isDark: boolean) => {
    setTheme((isDark ? darkTheme : baseTheme) as BaseTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          {children}
          <Footer onChangeTheme={onChangeTheme} />
        </HydrationBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
