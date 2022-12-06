import PropTypes from 'prop-types';
import { ListItem, ItemWrapper, ItemText } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import Button from 'components/button/Button';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ListItem>
      <ItemWrapper>
        <ItemText>
          {name}: {number}
        </ItemText>
        <Button
          type="button"
          style={{ paddingTop: '4px', paddingBottom: '4px' }}
          disabled={isLoading}
          onClick={() => deleteContact(id)}
        >
          Delete
        </Button>
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
