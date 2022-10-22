import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactBook/ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/contactsSelectors';
import { OrderedList } from '@chakra-ui/react';

const UserList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  function renderByFilter() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  return (
    <OrderedList width={300} mt="20px" fontFamily="sans-serif" fontSize={16}>
      {renderByFilter().map(contact => (
        <ContactListItem key={contact.id} user={contact} />
      ))}
      {}
    </OrderedList>
  );
};

export default UserList;
