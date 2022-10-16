import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Form,
  FormWrapper,
  NameInput,
  NumberInput,
  FormLabel,
  FormButton,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
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

    this.props.onSubmitContactForm(contact);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormWrapper>
        <Form onSubmit={this.handleSubmit}>
          <FormLabel>
            Name:
            <NameInput
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            Number:
            <NumberInput
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </FormWrapper>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmitContactForm: PropTypes.func.isRequired,
};
