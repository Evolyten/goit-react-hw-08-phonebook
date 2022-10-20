import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './LogInForm.module.css';
import { logIn } from 'redux/contactsOperation';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Section } from 'components/Section/Section';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter the email')
    .matches(
      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/,
      'Not correct email'
    ),

  password: Yup.string()
    .required('Please enter the password')
    .min(6, 'Password of phone must have more then 6 number')
    .max(14, 'Password of phone must have less then 15 number'),
});

const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (user, { resetForm }) => {
    console.log(user);
    dispatch(logIn(user));
    resetForm();
  };

  return (
    <Section title="Log In">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field
              className={css.input}
              type="email"
              name="email"
              autoComplete="username"
            />
            <ErrorMessage name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field
              className={css.input}
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <ErrorMessage name="password" />
          </label>
          <button className={css.btnSubmit} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </Section>
  );
};

export default LogInForm;
