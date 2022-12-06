import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import Loader from './loader/Loader';
import { refreshUser } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const EditContactModal = lazy(() => import('./editContactModal'));

export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />

        <Route
          path="/contacts/*"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        >
          <Route
            path="edit/:contactId"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<EditContactModal />}
              />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};
