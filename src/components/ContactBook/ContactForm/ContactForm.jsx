import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { addContact } from 'redux/contacts/contactsOperation';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { getContacts } from 'redux/contacts/contactsSelectors';
import {
  Button,
  FormLabel,
  Input,
  VStack,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';
import { Section } from 'components/Section/Section';
import { ToastFailedContact } from 'components/Toast/Toast';
import { ChatIcon, PhoneIcon } from '@chakra-ui/icons';

const initialValues = {
  name: '',
  number: '',
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
  number: Yup.string()
    .required('Please enter the number')
    .min(6, 'Number of phone must have more then 6 number')
    .max(14, 'Number of phone must have less then 15 number')
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (user, { resetForm }) => {
    if (contacts.some(contact => contact.name === user.name)) {
      ToastFailedContact(user.name);
      resetForm();
      return;
    }
    dispatch(addContact(user));
    resetForm();
  };

  return (
    <Section title="Phonebook" height={350}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing={3} align="flex-start">
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
                  placeholder="Contact Name"
                  pl="40px"
                />
              </InputGroup>
              <ErrorMessage name="name" />
              <FormLabel htmlFor="number"></FormLabel>
              <FormLabel htmlFor="name"></FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Field
                  as={Input}
                  id="number"
                  name="number"
                  type="number"
                  variant="filled"
                  autoComplete="current-password"
                  placeholder="Phone Number"
                  pl="40px"
                />
              </InputGroup>
              <ErrorMessage name="number" />
              <Button type="submit" colorScheme="purple" width="full" mt="40px">
                Add Contact
              </Button>
            </VStack>
          </form>
        )}
      </Formik>
    </Section>

    // <Formik
    //   initialValues={initialValues}
    //   onSubmit={handleSubmit}
    //   validationSchema={validationSchema}
    // >
    //   <Form className={css.form}>
    //     <label className={css.label}>
    //       Name
    //       <Field className={css.input} type="text" name="name" />
    //       <ErrorMessage name="name" />
    //     </label>
    //     <label className={css.label}>
    //       Number
    //       <Field className={css.input} type="tel" name="number" />
    //       <ErrorMessage name="number" />
    //     </label>
    //     <button className={css.btnSubmit} type="submit">
    //       add contact
    //     </button>
    //   </Form>
    // </Formik>
  );
};
