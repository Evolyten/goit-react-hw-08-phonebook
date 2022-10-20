import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/contactsOperation';
import { getUserEmail } from 'redux/contactsSelectors';
const MenuWrap = styled.div`
  display: flex;
  align-items: center;
`;
const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserEmail);
  return (
    <MenuWrap>
      <p>{userName}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </MenuWrap>
  );
};

export default UserMenu;
