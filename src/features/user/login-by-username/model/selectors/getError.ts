import { StateSchema } from '@/shared/store';

export const getError = (state: StateSchema) => state?.['login-by-username']?.error || '';
