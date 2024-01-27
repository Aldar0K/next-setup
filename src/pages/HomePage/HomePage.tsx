import { Counter } from '@/entities/counter';
import { Header } from '@/widgets';

export function HomePage() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Header />
      <h2>HomePage</h2>
      <Counter />
    </main>
  );
}
