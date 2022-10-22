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
} from '@chakra-ui/react';

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
      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/,
      'Not correct email'
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
    <Flex bg="gray.100" justify="center" h="100vh">
      <Section title="Registration" height={450} width={400}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack h={400} spacing={6} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">Contact Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                  />
                </FormControl>
                <ErrorMessage name="name" />
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
