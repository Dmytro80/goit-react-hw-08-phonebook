import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import Navigation from 'components/navigation/Navigation';
import UserMenu from 'components/userMenu/UserMenu';
import AuthNav from 'components/authNav/AuthNav';

import { HeaderStyled } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};

export default AppBar;
