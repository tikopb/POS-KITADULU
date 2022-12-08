import axios from "../api/axios";
import { setCredentials } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { apiRefreshToken } from "../store/authSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    await dispatch(apiRefreshToken());
  };

  return refresh;
};

export default useRefreshToken;
