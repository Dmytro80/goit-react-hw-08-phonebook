import React from 'react';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import { Wrapper, Title, SecondTitle, ErrorMessage } from './App.styled';
import { useGetContactsQuery } from 'redux/contactsSlice';
import Loader from './loader/Loader';

export const App = () => {
  const { error, isLoading } = useGetContactsQuery();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />

      {isLoading && !error && <Loader />}
      {!isLoading && error && (
        <ErrorMessage>
          Something went wrong, try reloading the page
        </ErrorMessage>
      )}
      {!isLoading && !error && <ContactList />}
    </Wrapper>
  );
};
