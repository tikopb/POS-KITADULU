import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegin } from "./apiConfig";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    menu: [],
    org: [],
  },
  reducers: {
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    setCredentials: (state, action) => {
      const { user, accessToken, menu, org } = action.payload;

      state.user = user;
      state.token = accessToken;
      state.menu = menu;
      state.org = org;
      state.loading = false;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const selectedCurUser = (state) => state.auth.user;
export const selectedCurToken = (state) => state.auth.token;
export const selectedCurLoading = (state) => state.auth.loading;
export const { apiRequested, apiRequestFailed, setCredentials, logOut } =
  authSlice.actions;
export default authSlice.reducer;

//action creators

export const apiFetchCredential = (data) =>
  apiCallBegin({
    url: "/api/v1/auth/login",
    method: "POST",
    data,
    onStart: apiRequested.type,
    onSuccess: setCredentials.type,
    onError: apiRequestFailed.type,
  });
