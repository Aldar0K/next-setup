import { StateSchema } from '@/shared/store';

export const getPassword = (state: StateSchema) => state?.['login-by-username']?.password || '';
