import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';
import Loader from 'components/loader/Loader';
import { Helmet } from 'react-helmet';
import MainTitle from 'components/mainTitle/MainTitle';
import SecondaryTitle from 'components/secondaryTitle/SecondaryTitle';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const Contacts = () => {
  const { error, isLoading } = useGetContactsQuery();

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <MainTitle style={{ marginBottom: '28px' }}>Phonebook</MainTitle>
      <ContactForm />
      <SecondaryTitle style={{ marginBottom: '28px' }}>Contacts</SecondaryTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && error && (
        <b>Something went wrong, try reloading the page</b>
      )}
      {!error && <ContactList />}
    </>
  );
};

export default Contacts;
