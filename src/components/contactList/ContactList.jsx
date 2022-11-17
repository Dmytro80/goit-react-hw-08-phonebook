import ContactListItem from '../contactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getValueFilter } from 'redux/selectors';

const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const { query } = useSelector(getValueFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = query.toLocaleLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(normalizedFilter);
    });
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};

export default ContactList;
