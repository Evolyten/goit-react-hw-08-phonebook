import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin: 0 10px 0 0;
  }
`;
