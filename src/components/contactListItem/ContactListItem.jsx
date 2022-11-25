import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemButton,
  ItemWrapper,
  ItemText,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  return (
    <ListItem>
      <ItemWrapper>
        <ItemText>
          {name}: {phone}
        </ItemText>
        <ListItemButton
          type="button"
          disabled={isLoading}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </ListItemButton>
      </ItemWrapper>
    </ListItem>
  );
};

export default ContactListItem;
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
