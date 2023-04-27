import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { NotFound } from '../pages';
import { token } from '../utils';

const PROTECTED_ROUTES = ['/todo'];
const PUBLIC_ROUTES = ['/', '/signin', '/signup'];

function Auth() {
  const { pathname } = useLocation();
  const accessToken = token.get();
  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  if (isPublicRoute) {
    if (accessToken) {
      return <Navigate to="/todo" />;
    }
    return <Outlet />;
  }
  if (isProtectedRoute) {
    if (!accessToken) {
      return <Navigate to="/signin" />;
    }
    return <Outlet />;
  }
  return <NotFound />;
}

export default Auth;
