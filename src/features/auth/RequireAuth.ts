import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectCurrentAccessToken } from './authSlice';

const RequireAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [dispatch, navigate, token]);

  return token ? (Outlet as any) : null;
};

export default RequireAuth;
