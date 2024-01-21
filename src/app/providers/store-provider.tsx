import { makeStore } from '@/shared/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;
  const store = makeStore();

  return <Provider store={store}>{children}</Provider>;
};
