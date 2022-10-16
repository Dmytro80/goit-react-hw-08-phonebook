import ContactListItem from '../contactListItem';
const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
