import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
