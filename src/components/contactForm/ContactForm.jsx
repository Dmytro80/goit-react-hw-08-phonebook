import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormWrapper } from './ContactForm.styled';
import FormField from 'components/formField/FormField';
import toast from 'react-hot-toast';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsSlice';
import FormFieldWrapper from '../formFieldWrapper';
import FormikForm from '../formikForm';
import FormButton from '../formButton';

const initialValues = {
  name: '',
  number: '',
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
  number: Yup.string()
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

  const handleSubmit = async ({ name, number }, { resetForm }) => {
    try {
      const normalizedName = name.toLowerCase();

      const bookContainsName = contacts.filter(contact => {
        return contact.name.toLowerCase() === normalizedName;
      });

      if (bookContainsName.length > 0) {
        return toast.error(`${name} is already in contacts.`);
      }

      const contact = {
        name: name.trim(),
        number: number.trim(),
      };

      await addContact(contact);

      toast.success('Contact added');

      resetForm();
    } catch (error) {
      toast.error('Error when adding contact');
      console.log(error);
    }
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormikForm>
          <FormFieldWrapper>
            <FormField name="name" type="text" title="Name" />
            <FormField name="number" type="tel" title="Number" />
          </FormFieldWrapper>
          <FormButton isLoading={isLoading}>
            {isLoading ? 'in progress...' : 'Add contact'}
          </FormButton>
        </FormikForm>
      </Formik>
    </FormWrapper>
  );
};
export default ContactForm;
