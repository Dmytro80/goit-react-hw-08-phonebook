import PropTypes from 'prop-types';
import { ListItem, ListItemButton } from './ContactListItem.styled';
const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <ListItemButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ListItemButton>
    </ListItem>
  );
};

export default ContactListItem;
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
