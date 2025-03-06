'use client'

import { getQueryClient } from '@/core/helpers/queryClient';
import ThemeProvider from '@/core/layout/theme-provider';
import {
  dehydrate, HydrationBoundary, QueryClientProvider
} from '@tanstack/react-query';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

// The application proviers including:
// - Styled Components theme provider
// - React Query provider within hydration for SSR
export default function Providers({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          {children}
        </HydrationBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
