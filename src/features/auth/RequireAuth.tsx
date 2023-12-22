import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectCurrentAccessToken } from './authSlice';

const RequireAuth: FC = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [dispatch, navigate, token]);

  return token ? <Outlet /> : null;
};

export default RequireAuth;