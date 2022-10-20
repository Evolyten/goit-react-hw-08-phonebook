import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from './AppBar/AppBar';
// import ContactBook from './ContactBook/ContactBook';
// import HomePage from './HomePage/HomePage';
// import RegistrationForm from './RegistrationForm/RegistrationFrom';
// import LogInForm from './LogInForm/LogInForm';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/contactsOperation';
import { getIsLoggedIn } from 'redux/contactsSelectors';

const ContactBook = lazy(() => import('./ContactBook/ContactBook'));
const HomePage = lazy(() => import('./HomePage/HomePage'));
const RegistrationForm = lazy(() =>
  import('./RegistrationForm/RegistrationFrom')
);
const LogInForm = lazy(() => import('./LogInForm/LogInForm'));

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  });

  return (
    <>
      <SideBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <RegistrationForm />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <LogInForm />}
          />
          <Route
            path="/contacts"
            element={isLoggedIn ? <ContactBook /> : <Navigate to="/login" />}
          />
        </Routes>
      </Suspense>
    </>
  );
}
