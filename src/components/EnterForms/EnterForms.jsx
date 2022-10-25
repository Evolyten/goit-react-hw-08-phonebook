import { useColorMode, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
const NavItem = styled(NavLink)`
  text-decoration: none;
  margin: 0 20px 0 20px;
  font-size: 20px;

  &.active {
    color: #4299e1;
  }
`;
const EnterForms = () => {
  const { colorMode } = useColorMode();

  return (
    <Box color={colorMode === 'dark' ? 'gray.200' : 'black'}>
      <NavItem to={'/register'}>Registration</NavItem>

      <NavItem to={'/login'}>Log In</NavItem>
    </Box>
  );
};

export default EnterForms;
