import { userActions } from '@/entities/user';
import { roboto } from '@/shared/assets/fonts/roboto';
import { useAppDispatch } from '@/shared/store';
import '@/shared/styles/main.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ErrorBoundary } from './providers/error-boundary';
import { StoreProvider } from './providers/store-provider/StoreProvider';
import { ThemeProvider } from './providers/theme-provider';

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  });

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

function AppWithProviders({ ...props }: AppProps) {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <App {...props} />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
}

export { AppWithProviders as App };
