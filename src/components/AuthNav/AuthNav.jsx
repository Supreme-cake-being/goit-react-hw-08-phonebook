import { Auth, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Auth>
      <StyledLink to="/register">Sign Up</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </Auth>
  );
};
