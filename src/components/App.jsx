import React, { useState, useEffect, useRef } from 'react';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import { Wrapper, Title, SecondTitle } from './App.styled';

const CONTACTS_STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContact] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filterQuery, setFilterQuery] = useState('');

  const contactsOfStorage = useRef(
    JSON.parse(localStorage.getItem(CONTACTS_STORAGE_KEY))
  );

  useEffect(() => {
    if (!contactsOfStorage.current) {
      return;
    }

    setContact(contactsOfStorage.current);
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterInputChange = e => {
    const { value } = e.currentTarget;

    setFilterQuery(value);
  };

  const formSubmitHandler = contact => {
    const normalizedContactName = contact.name.toLocaleLowerCase();
    const bookContainsName = contacts.filter(contact => {
      return contact.name.toLocaleLowerCase() === normalizedContactName;
    });

    if (bookContainsName.length > 0) {
      return alert(`${contact.name} is already in contacts.`);
    }

    setContact(prevState => [contact, ...prevState]);
  };

  const deleteContact = contactId => {
    setContact(contacts.filter(contact => contact.id !== contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filterQuery.toLocaleLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(normalizedFilter);
    });
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmitContactForm={formSubmitHandler} />
      <SecondTitle>Contacts</SecondTitle>
      <Filter filter={filterQuery} onInputChange={handleFilterInputChange} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Wrapper>
  );
};
