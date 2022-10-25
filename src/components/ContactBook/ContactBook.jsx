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
        display={{ sm: 'block', md: 'flex' }}
        justifyContent="space-between"
        width={{ sm: '320px', md: '768px', lg: '960px', xl: '1200px' }}
        p={{ sm: '15px', md: '30px' }}
        m="0 auto"
      >
        <ContactForm />
        <Section
          title="Contacts"
          width={{ sm: '290px', lg: '350px' }}
          height="auto"
        >
          <Filter />
          {!!contacts.length && <UserList />}
          {isLoading && <Loader />}
        </Section>
      </Box>
    </>
  );
}
