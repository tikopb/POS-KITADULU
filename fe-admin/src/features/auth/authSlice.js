import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: {
      reducer(state, action) {
        const { userData, token } = action.payload;

        state.user = userData;
        state.token = token;
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
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const selectedCurUser = (state) => state.auth.user;
export const selectedCurToken = (state) => state.auth.token;
export const { setCredentials, logOut, setToken } = authSlice.actions;
export default authSlice.reducer;
