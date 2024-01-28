import { Inter } from 'next/font/google';
import { FC } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const AboutPage: FC = () => {
  return (
    <main className='main bg-white'>
      <h2>AboutPage</h2>
    </main>
  );
};
