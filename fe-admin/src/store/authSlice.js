import { createSlice } from "@reduxjs/toolkit";
import axios from "../api/axios";

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
  },
});

export const loginHandlerSlice = (data) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.post("/api/v1/auth/login", data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      return response;
    };

    try {
      const response = await fetchData();
      if (response?.data) {
        const responseData = response.data;
        dispatch(authSlice.actions.setCredentials(responseData));
      }
    } catch (error) {
      //error
    }
  };
};

export const selectedCurUser = (state) => state.auth.user;
export const selectedCurToken = (state) => state.auth.token;
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
