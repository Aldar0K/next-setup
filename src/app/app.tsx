import { userActions } from '@/entities/user';
import { useAppDispatch } from '@/shared/store';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { StoreProvider } from './providers/store-provider';

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  });

  return <Component {...pageProps} />;
}

function AppWithProviders({ ...props }: AppProps) {
  return (
    <StoreProvider>
      <App {...props} />
    </StoreProvider>
  );
}

export { AppWithProviders as App };
