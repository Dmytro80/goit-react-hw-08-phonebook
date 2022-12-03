import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import AppBar from './appBar/AppBar';
import Container from './container/Container';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
