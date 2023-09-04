import { useAuth } from 'hooks/useAuth';
import { NavBar, StyledLink } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      <StyledLink to="/">Contacts</StyledLink>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </NavBar>
  );
};
