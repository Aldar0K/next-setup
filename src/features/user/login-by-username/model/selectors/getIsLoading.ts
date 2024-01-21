import { StateSchema } from '@/shared/store';

export const getIsLoading = (state: StateSchema) =>
  state?.['login-by-username']?.isLoading || false;
