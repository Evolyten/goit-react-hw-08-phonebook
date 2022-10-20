import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import UserList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './ContactBook.module.css';
import { Section } from 'components/Section/Section';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { fetchContact } from 'redux/contactsOperation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Loader from './Loader/Loader';
import { getContacts, getIsLoading } from '../../redux/contactsSelectors';
export default function ContactBook() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <>
      <div className={css.contact_wrap}>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          {!!contacts.length && <UserList />}
          {isLoading && <Loader />}
        </Section>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
}
