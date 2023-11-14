import { Slice, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthData, LoginBody } from './types';
import { getApiResource, loginUser } from '../Api/api';

export const initialState: AuthData = {
  userAuth: {
    email: null,
    password: null,
    name: null,
  },
};

export const authUser = createAsyncThunk(
  'auth/authUser',
  async (url: string) => {
    const res = await getApiResource(url);
    console.log(res.data);
    console.log(res);
    if (res.resultCode === 0) {
      return { ...res.data, isAuth: true };
    }
    return { isAuth: false };
  }
);
export const userLogin = createAsyncThunk(
  'user/userLogin',
  async (data: LoginBody, { dispatch }) => {
    await loginUser('url', data);
    console.log(data);
    await dispatch(authUser('url'));
  }
);

export const authReducer: Slice<AuthData> = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUser.fulfilled, (state: AuthData, action) => {
      state.userAuth = action.payload;
    });
  },
});

export const { setCaptcha } = authReducer.actions;
export const sliceAuthUser = authReducer.reducer;
