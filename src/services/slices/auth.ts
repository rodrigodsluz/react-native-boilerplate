/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  refreshToken?: string;
  accessToken?: string;
}

export interface AuthUpdateAction {
  refreshToken: string;
  accessToken: string;
}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication(state, action: PayloadAction<AuthUpdateAction>) {
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
    },
    signOut(state) {
      state.refreshToken = undefined;
      state.accessToken = undefined;
    },
  },
});

export const { setAuthentication, signOut } = authSlice.actions;

export default authSlice.reducer;
