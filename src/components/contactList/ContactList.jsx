import ContactListItem from '../contactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { selectValueFilter } from 'redux/contacts/selectors';

const ContactList = () => {
  const query = useSelector(selectValueFilter);
  const { data: contacts } = useGetContactsQuery();

  const getVisibleContacts = () => {
    const normalizedFilter = query.toLocaleLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(normalizedFilter);
    });
  };

  if (!contacts) {
    return null;
  }

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
