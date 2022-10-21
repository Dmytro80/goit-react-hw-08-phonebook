import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
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
  const handleSubmit = (values, actions) => {
    console.log(values);

    const contact = {
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    };

    onSubmitContactForm(contact);
    console.log(contact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label htmlFor="name">
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="name">
          Number:
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
