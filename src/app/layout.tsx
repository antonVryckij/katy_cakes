import PrelineScript from '@src/components/PrelineScript';
import ThemeProvider from '@src/providers/ThemeProvider';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import './globals.css';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

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
    <html lang="en" suppressHydrationWarning className={nunito.variable}>
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
