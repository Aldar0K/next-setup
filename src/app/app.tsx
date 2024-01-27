import { userActions } from '@/entities/user';
import { roboto } from '@/shared/assets/fonts/roboto';
import { useAppDispatch } from '@/shared/store';
import '@/shared/styles/main.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from './providers/theme-provider';
import { StoreProvider } from './providers/store-provider';

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
    <StoreProvider>
      <ThemeProvider>
        <App {...props} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export { AppWithProviders as App };
