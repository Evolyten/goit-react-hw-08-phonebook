import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { logIn } from 'redux/auth/authOperation';
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
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';
import { UnlockIcon, EmailIcon } from '@chakra-ui/icons';

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
    .min(7, 'Password must have more then 6 number')
    .max(14, 'Password of phone must have less then 15 number'),
});

const LogInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (user, { resetForm }) => {
    dispatch(logIn(user));
    resetForm();
  };

  return (
    <Flex bg="rgb(52, 56, 61)" justify="center" h="100vh">
      <Section title="Log In Form" height={350} width={400}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={6} align="flex-start">
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email"></FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<EmailIcon color="gray.300" />}
                    />
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                      autoComplete="username"
                      placeholder="Email"
                      pl="40px"
                    />
                  </InputGroup>
                </FormControl>
                <ErrorMessage name="email" />

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password"></FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<UnlockIcon color="gray.300" />}
                    />
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                      autoComplete="current-password"
                      placeholder="Password"
                      pl="40px"
                    />
                  </InputGroup>
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
