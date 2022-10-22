import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { register } from 'redux/auth/authOperation';
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

  const handleSubmit = (user, { resetForm }) => {
    console.log(user);

    dispatch(register(user));
    resetForm();
  };

  return (
    <Flex bg="rgb(52, 56, 61)" justify="center" h="100vh">
      <Section title="Registration" height={450} width={400}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack h={400} spacing={6} align="flex-start">
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

                <Button mt={40} type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Section>
    </Flex>

    // <Section title="Registration">
    //   <Formik
    //     initialValues={initialValues}
    //     onSubmit={handleSubmit}
    //     validationSchema={validationSchema}
    //   >
    //     <Form className={css.form}>
    //       <label className={css.label}>
    //         Name
    //         <Field className={css.input} type="text" name="name" />
    //         <ErrorMessage name="name" />
    //       </label>
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
    //           autoComplete="new-password"
    //         />
    //         <ErrorMessage name="password" />
    //       </label>
    //       <button className={css.btnSubmit} type="submit">
    //         Registration
    //       </button>
    //     </Form>
    //   </Formik>
    // </Section>
  );
};

export default RegistrationForm;
