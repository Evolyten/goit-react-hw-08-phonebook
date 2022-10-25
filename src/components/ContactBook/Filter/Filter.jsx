import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contatsReducer';
import {
  Input,
  useColorMode,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const Filter = () => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  function onChangeFilter(e) {
    let filterField = e.target.value;
    dispatch(filterContacts(filterField));
  }

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        name="filter"
        type="text"
        onChange={onChangeFilter}
        variant="flushed"
        placeholder="Enter contact name"
        borderBottomColor={colorMode === 'dark' ? 'blue.600' : 'blue.400'}
      />
    </InputGroup>
  );
};

export default Filter;
