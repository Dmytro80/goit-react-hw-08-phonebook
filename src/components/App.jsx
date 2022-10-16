import React, { Component } from 'react';
import PhonebookForm from './phonebookForm';
import Contacts from './contacts';
import Filter from './filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

    this.reset();
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(normalizedFilter);
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <PhonebookForm
          name={name}
          number={number}
          onInputChange={this.handleInputChange}
          onSubmitPhonebookForm={this.handleSubmit}
        />
        <Filter filter={filter} onInputChange={this.handleInputChange} />
        <Contacts contacts={visibleContacts} />
      </>
    );
  }
}
