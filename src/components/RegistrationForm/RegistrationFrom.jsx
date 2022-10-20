import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './Registaration.module.css';
import { register } from 'redux/contactsOperation';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Section } from 'components/Section/Section';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter the name')
    .min(3, 'Name must have more the 3 letter')
    .max(30, 'Name must have less then 30 letter')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  email: Yup.string()
    .required('Please enter the number')
    .matches(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/,
      'Not correct email'
    ),
  password: Yup.string().min(6, 'Minimum 6 letters'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (user, { resetForm }) => {
    console.log(user);

    dispatch(register(user));
    resetForm();
  };

  return (
    <Section title="Registration">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage name="name" />
          </label>
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
              autoComplete="new-password"
            />
            <ErrorMessage name="password" />
          </label>
          <button className={css.btnSubmit} type="submit">
            Registration
          </button>
        </Form>
      </Formik>
    </Section>
  );
};

export default RegistrationForm;
