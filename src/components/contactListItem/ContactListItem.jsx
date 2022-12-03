import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemButton,
  ItemWrapper,
  ItemText,
} from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ItemWrapper>
        <ItemText>
          {name}: {number}
        </ItemText>
        <ListItemButton
          type="button"
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
  number: PropTypes.string.isRequired,
};
