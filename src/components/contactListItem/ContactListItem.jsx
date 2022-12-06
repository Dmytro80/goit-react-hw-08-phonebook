import PropTypes from 'prop-types';
import { ListItem, Wrapper, ItemText } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import Button from 'components/button/Button';
import { useNavigate } from 'react-router-dom';

const ContactListItem = ({ id: contactId, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const navigate = useNavigate();

  return (
    <ListItem>
      <Wrapper>
        <ItemText>
          {name}: {number}
        </ItemText>
        <Wrapper style={{ gap: '6px' }}>
          <Button
            type="button"
            style={{ paddingTop: '4px', paddingBottom: '4px' }}
            disabled={isLoading}
            onClick={() => deleteContact(contactId)}
          >
            Delete
          </Button>
          <Button
            type="button"
            style={{ paddingTop: '4px', paddingBottom: '4px' }}
            disabled={isLoading}
            onClick={() => navigate(`/contacts/edit/${contactId}`)}
          >
            Edit
          </Button>
        </Wrapper>
      </Wrapper>
    </ListItem>
  );
};

export default ContactListItem;
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
