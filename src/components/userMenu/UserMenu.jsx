import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsLoading } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { UserMenuWrapper, UserMenuText } from './UserMenu.styled';
import Button from 'components/button/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  return (
    <UserMenuWrapper>
      <UserMenuText>{user.email}</UserMenuText>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => dispatch(logOut())}
      >
        {isLoading ? 'in progress...' : 'Logout'}
      </Button>
    </UserMenuWrapper>
  );
};

export default UserMenu;
