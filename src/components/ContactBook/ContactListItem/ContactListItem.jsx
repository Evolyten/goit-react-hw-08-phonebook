import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperation';
import { Box, Button, Text, useColorMode } from '@chakra-ui/react';
import { ListItem } from '@chakra-ui/react';
import { useState } from 'react';
export function ContactListItem({ user }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  function Loading() {
    setIsLoading(true);
  }
  const { id, name, number } = user;
  return (
    <ListItem
      width="80%"
      display="flex"
      flexDirection="column"
      textAlign="left"
      justifyContent="space-between"
      mb="20px"
      border="1px solid black"
      borderRadius="10px"
      p="10px"
      borderColor={colorMode === 'dark' ? 'blue.600' : 'blue.400'}
      fontFamily="Roboto"
    >
      <Box as="div">
        <Text>Contact name: {name}</Text>
      </Box>
      <Box as="div">
        <Text fontFamily="Roboto">
          Phone number:
          <Box ml="5px" as="a" textDecor="underline" href={`tel:${number}`}>
            {number}
          </Box>
        </Text>
      </Box>
      <Button
        h={30}
        isLoading={isLoading}
        borderColor="blue.400"
        variant="outline"
        w="80%"
        m="0 auto"
        mt="10px"
        onClick={e => {
          console.log(e.target);
          e.target.setAttribute('isLoading', 'true');
          Loading();
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  user: PropTypes.object,
};
