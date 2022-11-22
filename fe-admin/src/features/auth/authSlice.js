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
      prepare(username) {
        return {
          payload: {
            userData: {
              username: username.username,
              clientId: username.client_id,
              userId: username.User_id,
              orgId: username.org_id,
            },
            token: username.token,
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
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
