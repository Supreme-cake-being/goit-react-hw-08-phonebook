import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Auth = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  padding-top: 16px;
  padding-right: 8px;
  padding-bottom: 16px;
  padding-left: 8px;

  &.active {
    font-weight: 700;
  }
`;
