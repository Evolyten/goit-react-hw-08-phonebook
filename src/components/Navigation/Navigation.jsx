import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { List, Item } from '../AppBar/SideBar.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/contactsSelectors';

const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 0 20px 0 20px;
  font-size: 20px;

  &.active {
    color: red;
  }
`;
const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <List>
      <Item>
        <NavItem to={'/'} end>
          Главная
        </NavItem>
      </Item>
      {isLoggedIn && (
        <Item>
          <NavItem to={'/contacts'}>Контакт</NavItem>
        </Item>
      )}
    </List>
  );
};

export default Navigation;
