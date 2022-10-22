import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { getUserEmail } from 'redux/auth/authSlector';
import { Button } from '@chakra-ui/react';
const MenuWrap = styled.div`
  display: flex;
  align-items: center;
`;
const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserEmail);
  return (
    <MenuWrap>
      <p>Welcome, {userName}</p>
      <Button
        ml="20px"
        bgColor="#373837"
        border="1px solid grey"
        _hover={{
          color: '#000',
          bgColor: '#fff',
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </MenuWrap>
  );
};

export default UserMenu;
