import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemButton,
  ItemWrapper,
  ItemText,
} from './ContactListItem.styled';
const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem>
      <ItemWrapper>
        <ItemText>
          {name}: {number}
        </ItemText>
        <ListItemButton type="button" onClick={() => onDeleteContact(id)}>
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
  onDeleteContact: PropTypes.func.isRequired,
};
