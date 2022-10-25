import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { register } from 'redux/auth/authOperation';
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
import { UnlockIcon, EmailIcon, ChatIcon } from '@chakra-ui/icons';

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
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer'
    ),
  email: Yup.string()
    .required('Please enter the number')
    .matches(
      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/,
      'example qwerr@mail.com'
    ),
  password: Yup.string().min(7, 'Minimum 7 letters'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  const handleSubmit = (user, { resetForm }) => {
    console.log(user);

    dispatch(register(user));
    resetForm();
  };

  return (
    <Section
      title="Registration"
      height={450}
      width={{ sm: '290px', md: '400px' }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} align="flex-start">
              <FormControl isInvalid={!!errors.name && touched.name}>
                <FormLabel htmlFor="name"></FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<ChatIcon color="gray.300" />}
                  />
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                    placeholder="User Name"
                    pl="40px"
                  />
                </InputGroup>
              </FormControl>
              <ErrorMessage name="name" />
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
                mt={40}
                type="submit"
                colorScheme="blue"
                width="full"
                backgroundColor={colorMode === 'dark' ? 'blue.600' : 'blue.400'}
                color="#fff"
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

export default RegistrationForm;
