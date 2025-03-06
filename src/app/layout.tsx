import Providers from '@/app/providers';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Facto Expense",
  description: "A multi-tenant expense management system",
};

// The application root layout.
// It wraps the main content within the
// application Providers and renders the footer.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Providers>
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
