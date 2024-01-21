import { Header } from '@/widgets';
import { Inter } from 'next/font/google';
import { FC } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const AboutPage: FC = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <h2>AboutPage</h2>
    </main>
  );
};
