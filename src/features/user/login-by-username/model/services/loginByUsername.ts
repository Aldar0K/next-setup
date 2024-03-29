import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userSlice } from '@/entities/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const';

type LoginByUsernameProps = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:8000/login', authData);
    if (!response.data) {
      throw new Error();
    }

    thunkAPI.dispatch(userSlice.actions.setAuthData(response.data));
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Your login or password is wrong!');
  }
});
