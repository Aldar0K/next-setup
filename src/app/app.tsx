import { userActions } from '@/entities/user';
import { roboto } from '@/shared/assets/fonts/roboto';
import { classNames } from '@/shared/lib';
import { useAppDispatch } from '@/shared/store';
import '@/shared/styles/main.scss';
import { Header, PageLoader, Sidebar } from '@/widgets';
import { Analytics } from '@vercel/analytics/react';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from './providers/error-boundary';
import { StoreProvider } from './providers/store-provider/StoreProvider';
import { ThemeProvider, useTheme } from './providers/theme-provider';
import SEO from '../../next-seo.config';

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    dispatch(userActions.initAuthData());
  }, []);

  if (!mounted) {
    return <PageLoader />;
  }

  return (
    <div className={classNames('wrapper', {}, [theme])}>
      <style jsx global>
        {`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}
      </style>

      <Analytics />

      <NextSeo
        title='Next Setup (Aldar)'
        description='Next app setup with pages router (Aldar)'
        canonical='https://next-setup-seven.vercel.app'
      />

      <Header />
      <div className='content'>
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </div>
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
