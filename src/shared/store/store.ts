import { counterSlice } from '@/entities/counter';
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer
    },
    devTools: true
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type StateSchema = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateSchema, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
