import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlector';
import { Box } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

const NavItem = styled(NavLink)`
  text-decoration: none;
  margin: 0 20px 0 20px;
  font-size: 20px;
  &.active {
    color: #4299e1;
  }
  @media (max-width: 768px) {
    fon-size: 16px;
  }
`;
const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { colorMode } = useColorMode();

  return (
    <Box
      color={colorMode === 'dark' ? 'white' : 'black'}
      fontSize={{ sm: '16px', md: '20px' }}
    >
      <NavItem as={NavLink} to={'/'} end>
        Main Page
      </NavItem>
      {isLoggedIn && (
        <NavItem as={NavLink} to={'/contacts'}>
          Contacts
        </NavItem>
      )}
    </Box>
  );
};

export default Navigation;
