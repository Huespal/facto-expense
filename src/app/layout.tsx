import Footer from '@/components/Footer';
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
        <main>
          <ThemeProvider>
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
