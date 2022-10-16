import React, { Component } from 'react';
import PhonebookForm from './phonebookForm';
import Contacts from './contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contactId = nanoid();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, id: contactId, number: this.state.number },
      ],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <PhonebookForm
          name={this.state.name}
          number={this.state.number}
          onInputChange={this.handleInputChange}
          onSubmitPhonebookForm={this.handleSubmit}
        />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
