import ContactListItem from '../contactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectValueFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';

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
      {visibleContacts.map(({ id, name, phone }) => {
        return <ContactListItem key={id} name={name} phone={phone} id={id} />;
      })}
    </List>
  );
};

export default ContactList;
