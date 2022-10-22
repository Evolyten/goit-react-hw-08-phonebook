import { Outlet } from 'react-router-dom';
import EnterForms from 'components/EnterForms/EnterForms';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlector';
import { Box } from '@chakra-ui/react';

const SideBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Box
        as="header"
        display="flex"
        padding="20px 30px"
        justifyContent="space-between"
        borderBottom="2px solid red"
        bgColor="#373837"
        color="#fff"
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <EnterForms />}
      </Box>
      <Outlet />
    </>
  );
};

export default SideBar;
