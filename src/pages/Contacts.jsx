import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';
import Loader from 'components/loader/Loader';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import MainTitle from 'components/mainTitle/MainTitle';
import SecondaryTitle from 'components/secondaryTitle/SecondaryTitle';

const Contacts = () => {
  const isLoading = useSelector(selectLoading);

  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
