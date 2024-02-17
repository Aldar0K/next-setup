import { StateSchema } from '@/shared/store';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
