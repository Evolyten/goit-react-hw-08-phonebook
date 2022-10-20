import { Header } from './SideBar.styled';
import { Outlet } from 'react-router-dom';
import EnterForms from 'components/EnterForms/EnterForms';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/contactsSelectors';

const SideBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <EnterForms />}
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SideBar;
