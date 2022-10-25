import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { getUserEmail } from 'redux/auth/authSlector';
import { Button, useColorMode, Box } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
const MenuWrap = styled.div`
  display: flex;
  align-items: center;
`;
const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserEmail);
  const { colorMode } = useColorMode();

  return (
    <MenuWrap>
      <Box as="div" display="flex" alignItems="center">
        Welcome,
        <Box margin="0 6px">
          <FaUser display="block" />
        </Box>
        {userName}
      </Box>
      <Button
        colorScheme="blue"
        ml="20px"
        color={colorMode === 'dark' ? 'gray.200' : 'white'}
        bgColor={colorMode === 'dark' ? 'blue.600' : 'blue.400'}
        border="1px solid grey"
        // _hover={{
        //   color: '#000',
        //   bgColor: '#fff',
        // }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </MenuWrap>
  );
};

export default UserMenu;
