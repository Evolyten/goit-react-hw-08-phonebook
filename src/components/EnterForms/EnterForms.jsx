import { List, Item } from '../AppBar/SideBar.styled';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 0 20px 0 20px;
  font-size: 20px;

  &.active {
    color: red;
  }
`;
const EnterForms = () => {
  return (
    <List>
      <Item>
        <NavItem to={'/register'}>Регистрация</NavItem>
      </Item>
      <Item>
        <NavItem to={'/login'}>Войти</NavItem>
      </Item>
    </List>
  );
};

export default EnterForms;
