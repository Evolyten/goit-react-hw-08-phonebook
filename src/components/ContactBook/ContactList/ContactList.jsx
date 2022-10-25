import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactBook/ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/contacts/contactsSelectors';
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
    <OrderedList
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      margin="0"
      mt="20px"
      fontFamily="sans-serif"
      fontSize={16}
      h="650px"
      overflow="auto"
    >
      {renderByFilter().map(contact => (
        <ContactListItem key={contact.id} user={contact} />
      ))}
      {}
    </OrderedList>
  );
};

export default UserList;
