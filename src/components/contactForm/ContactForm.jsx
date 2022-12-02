import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormWrapper,
  SubmitForm,
  NameInput,
  NumberInput,
  FormLabel,
  FormButton,
  Error,
  IntupWrapper,
} from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const initialValues = {
  name: '',
  phone: '',
};

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  phone: Yup.string()
    .trim()
    .min(7, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(
      /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/,
      'Phone number is not valid'
    )
    .required('Number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm, setSubmitting }) => {
    const normalizedName = name.toLowerCase();

    const bookContainsName = contacts.filter(contact => {
      return contact.name.toLowerCase() === normalizedName;
    });

    if (bookContainsName.length > 0) {
      return alert(`${name} is already in contacts.`);
    }

    const contact = {
      name: name.trim(),
      number: number.trim(),
    };

    dispatch(addContact(contact));

    setSubmitting(false);

    resetForm();
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ isSubmitting }) => (
          <SubmitForm>
            <IntupWrapper>
              <FormLabel htmlFor="name">
                Name:
                <NameInput type="text" name="name" />
                <Error name="name" component="p" />
              </FormLabel>
              <FormLabel htmlFor="phone">
                Number:
                <NumberInput type="tel" name="number" />
                <Error name="phone" component="p" />
              </FormLabel>
            </IntupWrapper>
            <FormButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Add contact'}
            </FormButton>
          </SubmitForm>
        )}
      </Formik>
    </FormWrapper>
  );
};
export default ContactForm;
