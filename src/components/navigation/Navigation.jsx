import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavigateLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavigateLink to={'/'}>Home</NavigateLink>
      {isLoggedIn && <NavigateLink to={'/contacts'}>Contacts</NavigateLink>}
    </nav>
  );
};

export default Navigation;
