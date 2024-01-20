import { makeStore } from '@/shared/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export function App({ Component, pageProps }: AppProps) {
  const store = makeStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
