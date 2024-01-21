import type { AppProps } from 'next/app';
import { StoreProvider } from './providers/store-provider';

export function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
