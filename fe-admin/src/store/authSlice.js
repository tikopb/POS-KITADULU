import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegin } from "./apiConfig";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, loading: false, error: null },
  reducers: {
    apiRequested: (state, action) => {
      console.log(action, "asdasd");
      state.loading = true;
    },
    apiRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    setCredentials: {
      reducer(state, action) {
        const { userData, token } = action.payload;

        state.user = userData;
        state.token = token;
        state.loading = false;
      },
      prepare(data) {
        return {
          payload: {
            userData: {
              userId: data.user.userId,
              username: data.user.username,
              name: data.user.name,
              roleId: data.user.roleId,
              orgId: data.user.orgId,
            },
            token: data.accessToken,
          },
        };
      },
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
