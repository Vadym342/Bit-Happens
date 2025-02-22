import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  // get user from local storage and verify token time
  const user = true;
  return user ? <Outlet /> : <Navigate to="/sign-up" />;
};

export default ProtectedRoutes;
