import { Inter } from 'next/font/google';
import Link from 'next/link';
import { FC } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const AboutPage: FC = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <nav className='flex gap-2'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
      </nav>

      <h2>AboutPage</h2>
    </main>
  );
};
