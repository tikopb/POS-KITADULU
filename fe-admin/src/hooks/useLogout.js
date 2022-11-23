import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { logOut } from "../store/authSlice";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(logOut());
    try {
      await axios("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
