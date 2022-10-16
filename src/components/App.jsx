import React, { Component } from 'react';
import PhonebookForm from './phonebookForm';
import Contacts from './contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contactId = nanoid();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, id: contactId },
      ],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <>
        <PhonebookForm
          value={this.state.name}
          onInputChange={this.handleInputChange}
          onSubmitPhonebookForm={this.handleSubmit}
        />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
