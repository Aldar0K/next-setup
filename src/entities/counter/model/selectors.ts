import { StateSchema } from '@/shared/store';

export const getCounter = (state: StateSchema) => state.counter;

export const getCounterValue = (state: StateSchema) => state.counter.value;
