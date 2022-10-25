import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { logIn } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Section } from 'components/Section/Section';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputLeftElement,
  InputGroup,
  useColorMode,
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
  const { colorMode } = useColorMode();

  const handleSubmit = (user, { resetForm }) => {
    dispatch(logIn(user));
    resetForm();
  };

  return (
    <Section title="Log In Form" width={{ sm: '290px', md: '400px' }}>
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

              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                color="#fff"
                backgroundColor={colorMode === 'dark' ? 'blue.600' : 'blue.400'}
              >
                Login
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Section>
  );
};

export default LogInForm;
