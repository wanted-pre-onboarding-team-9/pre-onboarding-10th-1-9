import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { NotFound } from '../pages';
import { token } from '../utils';

const PRIVATE_ROUTES = ['/todo'];
const PUBLIC_ROUTES = ['/', '/signin', '/signup'];

function Auth() {
  const { pathname } = useLocation();
  const accessToken = token.get();
  const isPrivateRoute = PRIVATE_ROUTES.includes(pathname);
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  if (isPublicRoute) {
    if (accessToken) {
      return <Navigate to="/todo" />;
    }
    return <Outlet />;
  }
  if (isPrivateRoute) {
    if (!accessToken) {
      return <Navigate to="/signin" />;
    }
    return <Outlet />;
  }
  return <NotFound />;
}

export default Auth;
