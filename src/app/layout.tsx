import ThemeProvider from '@/core/layout/theme-provider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Facto Expense",
  description: "A multi-tenant expense management system",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
