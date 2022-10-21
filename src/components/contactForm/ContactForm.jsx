import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
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

const ContactForm = ({ onSubmitContactForm }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = {
      name: name.trim(),
      number: number.trim(),
      id: nanoid(),
    };

    onSubmitContactForm(contact);
    console.log(contact);
    resetForm();
  };

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
            <FormLabel htmlFor="number">
              Number:
              <NumberInput type="tel" name="number" />
              <Error name="number" component="p" />
            </FormLabel>
          </IntupWrapper>
          <FormButton type="submit">Add contact</FormButton>
        </SubmitForm>
      </Formik>
    </FormWrapper>
  );
};
export default ContactForm;

ContactForm.propTypes = {
  onSubmitContactForm: PropTypes.func.isRequired,
};
