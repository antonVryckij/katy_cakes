import PrelineScript from '@src/components/PrelineScript';
import ThemeProvider from '@src/providers/ThemeProvider';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import './globals.css';

export const metadata: Metadata = {
  title: 'Katy Cakes',
  description: 'Bakery of your dream',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-neutral-800">
        <ThemeProvider>
          <AppHeader />
          {children}
          <AppFooter />
        </ThemeProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
