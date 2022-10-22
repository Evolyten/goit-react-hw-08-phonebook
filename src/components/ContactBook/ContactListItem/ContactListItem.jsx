import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperation';
// import { useSelector } from 'react-redux';
// import { getIsLoading } from 'redux/contactsSelectors';
import { Button } from '@chakra-ui/react';
import { ListItem } from '@chakra-ui/react';
export function ContactListItem({ user }) {
  // const isLoadingg = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const { id, name, number } = user;
  return (
    <ListItem
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb="20px"
    >
      {name}: {number}
      <Button
        h={30}
        colorScheme="teal"
        variant="outline"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  user: PropTypes.object,
};
