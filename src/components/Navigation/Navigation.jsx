import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlector';
import { Box } from '@chakra-ui/react';

const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 0 20px 0 20px;
  font-size: 20px;
  color: #fff;

  &.active {
    color: red;
  }
`;
const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box>
      <NavItem to={'/'} end>
        Main Page
      </NavItem>
      {isLoggedIn && (
        <NavItem to={'/contacts'} active={{ color: 'red' }}>
          Contacts
        </NavItem>
      )}
    </Box>
  );
};

export default Navigation;
