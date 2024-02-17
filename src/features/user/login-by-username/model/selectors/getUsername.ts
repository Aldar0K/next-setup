import { StateSchema } from '@/shared/store';

export const getUsername = (state: StateSchema) => state?.['login-by-username']?.username || '';
