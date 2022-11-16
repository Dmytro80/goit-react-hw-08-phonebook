import React, { useState } from 'react';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import { Wrapper, Title, SecondTitle } from './App.styled';

export const App = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const handleFilterInputChange = e => {
    const { value } = e.currentTarget;

    setFilterQuery(value);
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter filter={filterQuery} onInputChange={handleFilterInputChange} />
      <ContactList />
    </Wrapper>
  );
};
