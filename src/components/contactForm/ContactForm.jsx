import toast from 'react-hot-toast';
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
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';

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
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = async ({ name, phone }, { resetForm }) => {
    try {
      const normalizedName = name.toLowerCase();

      const bookContainsName = contacts.filter(contact => {
        return contact.name.toLowerCase() === normalizedName;
      });

      if (bookContainsName.length > 0) {
        toast.error('Error when adding material');
        return alert(`${name} is already in contacts.`);
      }

      const contact = {
        name: name.trim(),
        phone: phone.trim(),
      };

      await addContact(contact);

      alert('Сontact added');

      resetForm();
    } catch (error) {
      toast.error('Error when adding material');
      console.log(error);
    }
  };

  if (!contacts) {
    return null;
  }

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <SubmitForm>
          <IntupWrapper>
            <FormLabel htmlFor="name">
              Name:
              <NameInput type="text" name="name" />
              <Error name="name" component="p" />
            </FormLabel>
            <FormLabel htmlFor="phone">
              Number:
              <NumberInput type="tel" name="phone" />
              <Error name="phone" component="p" />
            </FormLabel>
          </IntupWrapper>
          <FormButton type="submit">
            {isLoading ? 'Saving...' : 'Add contact'}
          </FormButton>
        </SubmitForm>
      </Formik>
    </FormWrapper>
  );
};
export default ContactForm;
