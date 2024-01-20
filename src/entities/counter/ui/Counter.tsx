'use client';

import { useAppDispatch, useAppSelector } from '@/shared/store';
import { FC } from 'react';
import { getCounterValue } from '../model/selectors';
import { counterSlice } from '../model/slice';

export const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(getCounterValue);

  const increment = () => {
    dispatch(counterSlice.actions.increment());
  };

  const decrement = () => {
    dispatch(counterSlice.actions.decrement());
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
