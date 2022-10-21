import PropTypes from 'prop-types';
import ContactListItem from '../contactListItem';
import { List } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
