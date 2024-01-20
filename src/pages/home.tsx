import { Counter } from '@/entities/counter';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function HomePage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Counter />
    </main>
  );
}
