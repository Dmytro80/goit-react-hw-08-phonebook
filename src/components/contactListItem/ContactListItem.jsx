import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemButton,
  ItemWrapper,
  ItemText,
} from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ListItem>
      <ItemWrapper>
        <ItemText>
          {name}: {number}
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
  number: PropTypes.string.isRequired,
};
