import { AuthNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </div>
  );
};

export default AuthNav;
