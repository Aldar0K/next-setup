import { counterSlice } from '@/entities/counter';
import { userSlice } from '@/entities/user';
import { loginByUsernameSlice } from '@/features/user/login-by-username';
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [counterSlice.reducerPath]: counterSlice.reducer,
      [userSlice.reducerPath]: userSlice.reducer,
      [loginByUsernameSlice.reducerPath]: loginByUsernameSlice.reducer
    },
    devTools: true
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type StateSchema = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateSchema, unknown, Action>;

// no use
export const wrapper = createWrapper<AppStore>(makeStore);
