import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { logIn } from 'redux/contactsOperation';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Section } from 'components/Section/Section';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

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
    <Flex bg="gray.100" justify="center" h="100vh">
      <Section title="Log In" height={350}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={6} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    autoComplete="username"
                  />
                </FormControl>
                <ErrorMessage name="email" />

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    autoComplete="current-password"
                  />
                  <ErrorMessage name="password" />
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Section>
    </Flex>
    // <Section title="Log In">
    //   <Formik
    //     initialValues={initialValues}
    //     onSubmit={handleSubmit}
    //     validationSchema={validationSchema}
    //   >
    //     <Form className={css.form}>
    //       <label className={css.label}>
    //         Email
    //         <Field
    //           className={css.input}
    //           type="email"
    //           name="email"
    //           autoComplete="username"
    //         />
    //         <ErrorMessage name="email" />
    //       </label>
    //       <label className={css.label}>
    //         Password
    //         <Field
    //           className={css.input}
    //           type="password"
    //           name="password"
    //           autoComplete="current-password"
    //         />
    //         <ErrorMessage name="password" />
    //       </label>
    //       <button className={css.btnSubmit} type="submit">
    //         Log In
    //       </button>
    //     </Form>
    //   </Formik>
    // </Section>
  );
};

export default LogInForm;
