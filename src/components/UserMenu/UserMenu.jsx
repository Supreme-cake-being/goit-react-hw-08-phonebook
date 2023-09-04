import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { selectToken } from 'redux/auth/selectors';

import { Menu, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const token = useSelector(selectToken);

  return (
    <Menu>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut(token))}>
        Logout
      </Button>
    </Menu>
  );
};
