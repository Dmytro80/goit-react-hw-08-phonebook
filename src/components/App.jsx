import React, { Component } from 'react';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterInputChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  formSubmitHandler = contact => {
    const { contacts } = this.state;
    const normalizedContactName = contact.name.toLocaleLowerCase();
    const bookContainsName = contacts.filter(contact => {
      return contact.name.toLocaleLowerCase() === normalizedContactName;
    });

    if (bookContainsName.length > 0) {
      return alert(`${contact.name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitContactForm={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onInputChange={this.handleFilterInputChange} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
