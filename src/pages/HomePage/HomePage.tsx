import { Counter } from '@/entities/counter';
import { Header } from '@/widgets';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export function HomePage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <h2>HomePage</h2>
      <Counter />
    </main>
  );
}
