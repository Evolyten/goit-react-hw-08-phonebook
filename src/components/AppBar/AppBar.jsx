import { Outlet } from 'react-router-dom';
import EnterForms from 'components/EnterForms/EnterForms';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlector';
import { Box, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const SideBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        as="header"
        borderBottom="1px solid red"
        borderBottomColor="gray.600"
      >
        <Box
          display="flex"
          width={{ sm: '320px', md: '768px', lg: '960px', xl: '1200px' }}
          flexDirection={{ sm: 'column', md: 'row' }}
          padding="20px 30px"
          justifyContent="space-between"
          alignItems="center"
          color={colorMode === 'dark' ? 'gray.200' : 'black'}
          margin="0 auto"
        >
          <Navigation />
          <ColorModeSwitcher />
          {isLoggedIn ? <UserMenu /> : <EnterForms />}
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default SideBar;
