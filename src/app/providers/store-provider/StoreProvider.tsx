'use client';

import { AppStore, makeStore } from '@/shared/store';
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
