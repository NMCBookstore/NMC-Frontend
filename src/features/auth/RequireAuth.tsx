import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { login, selectCurrentAccessToken } from "./authSlice";

const RequireAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentAccessToken);
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/")
      dispatch(login()); // dispatch login action when token does not exist
    }
  }, [dispatch, token]);

  return token ? (
    <Outlet />
  ) : null;
}

export default RequireAuth;