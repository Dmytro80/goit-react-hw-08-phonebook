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

export const Contacts = () => {
  const isLoading = useSelector(selectLoading);

  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h1
        style={{ textAlign: 'center', fontSize: '36px', marginBottom: '28px' }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{ textAlign: 'center', fontSize: '28px', marginBottom: '28px' }}
      >
        Contacts
      </h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && error && (
        <b>Something went wrong, try reloading the page</b>
      )}
      {!isLoading && !error && <ContactList />}
    </div>
  );
};
