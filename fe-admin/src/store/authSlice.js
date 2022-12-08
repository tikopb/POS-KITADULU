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
      state.menu = [];
      state.org = [];
    },
    showSubMenu: (state, action) => {
      const menu = state.menu.map((row) => {
        if (row.menu_id === action.payload.id) {
          return { ...row, isShowChildren: action.payload.isShowChildren };
        } else {
          const hasChild = row.children.length > 0;
          return { ...row, isShowChildren: hasChild ? true : false };
        }
      });

      state.menu = menu;
    },
  },
});

export const selectedCurUser = (state) => state.auth.user;
export const selectedCurToken = (state) => state.auth.token;
export const selectedCurLoading = (state) => state.auth.loading;
export const selectedCurMenu = (state) => state.auth.menu;
export const {
  apiRequested,
  apiRequestFailed,
  setCredentials,
  logOut,
  showSubMenu,
} = authSlice.actions;
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

export const apiDoLogout = () =>
  apiCallBegin({
    url: "/api/v1/auth/logout",
    method: "POST",
    onSuccess: logOut.type,
    onError: apiRequestFailed.type,
  });

export const apiRefreshToken = () =>
  apiCallBegin({
    url: "/api/v1/refresh-token",
    method: "GET",
    onSuccess: setCredentials.type,
    onError: apiRequestFailed.type,
  });
