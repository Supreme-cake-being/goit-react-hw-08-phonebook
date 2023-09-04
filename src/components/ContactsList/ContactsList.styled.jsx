import styled from '@emotion/styled';

const List = styled.ul`
  margin-top: 24px;
  padding: 0 200px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.li`
  padding-bottom: 16px;

  display: flex;
  align-items: center;
  gap: 32px;

  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: auto;

  color: black;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid black;

  transition: color 250ms ease-out, background-color 250ms ease-out;

  &:hover,
  &:focus {
    color: white;
    background-color: black;
  }
`;

const EmptyContacts = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export { List, Item, Button, EmptyContacts };
