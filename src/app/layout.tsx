import AppFooter from '@components/app-footer';
import AppHeader from '@components/app-header';
import PrelineScript from '@src/components/PrelineScript';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
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
    <html lang="en" className="dark">
      <body className="dark:bg-neutral-800">
        <AppHeader />
        {children}
        <AppFooter />
      </body>
      <PrelineScript />
    </html>
  );
}
