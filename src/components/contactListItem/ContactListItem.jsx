import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemButton,
  ItemWrapper,
  ItemText,
} from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';

const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ListItem>
      <ItemWrapper>
        <ItemText>
          {name}: {phone}
        </ItemText>
        <ListItemButton
          type="button"
          disabled={isLoading}
          onClick={() => deleteContact(id)}
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
