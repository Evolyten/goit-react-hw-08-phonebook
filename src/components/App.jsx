import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from './AppBar/AppBar';

import { Routes, Route } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/contactsOperation';
import { getIsCurrentUserFetching } from 'redux/contactsSelectors';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublickRoute';

const ContactBook = lazy(() => import('./ContactBook/ContactBook'));
const HomePage = lazy(() => import('./HomePage/HomePage'));
const RegistrationForm = lazy(() =>
  import('./RegistrationForm/RegistrationFrom')
);
const LogInForm = lazy(() => import('./LogInForm/LogInForm'));

export default function App() {
  const dispatch = useDispatch();
  const isCurrentUserFetching = useSelector(getIsCurrentUserFetching);
  console.log();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isCurrentUserFetching && (
      <>
        (<SideBar />
        <Suspense fallback={null}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegistrationForm />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LogInForm />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactBook />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
        )
      </>
    )
  );
}
