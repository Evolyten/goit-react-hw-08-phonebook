import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import UserList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Section } from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/contactsOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import Loader from './Loader/Loader';
import {
  getContacts,
  getIsLoading,
} from '../../redux/contacts/contactsSelectors';
export default function ContactBook() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <>
      <Box
        display="flex"
        bgColor="rgb(52, 56, 61)"
        h="100vh"
        // flexDirection="column"
        justifyContent="space-between"
        // alignItems="center"
        p={30}
      >
        <ContactForm />
        <Section title="Contacts" width={400} height="auto">
          <Filter />
          {!!contacts.length && <UserList />}
          {isLoading && <Loader />}
        </Section>
      </Box>
    </>
  );
}
