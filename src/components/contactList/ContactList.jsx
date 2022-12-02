import ContactListItem from '../contactListItem';
import { List } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};

export default ContactList;
