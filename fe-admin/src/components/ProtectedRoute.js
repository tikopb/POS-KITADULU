import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedCurToken } from "../store/authSlice";

const ProtectedRoute = () => {
  const token = useSelector(selectedCurToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to='/login'
      state={{ from: location }}
      replace
    />
  );
};

export default ProtectedRoute;
