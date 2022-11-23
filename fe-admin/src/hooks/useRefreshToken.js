import axios from "../api/axios";
import { setCredentials } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axios.get("/api/v1/refresh-token", {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    if (response.status === 200) {
      if (response?.data) {
        dispatch(setCredentials(response.data));
      }
    }
  };

  return refresh;
};

export default useRefreshToken;
