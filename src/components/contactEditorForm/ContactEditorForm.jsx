import { Formik } from 'formik';
import FormikForm from 'components/formikForm/FormikForm';
import FormFieldWrapper from 'components/formFieldWrapper/FormFieldWrapper';
import FormField from 'components/formField/FormField';
import Button from 'components/button/Button';
import { useUpdateContactMutation } from 'redux/contacts/contactsSlice';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './ContactEditorForm.styled';
import PropTypes from 'prop-types';

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too Short!')
    .max(25, 'Too Long!')
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

const ContactEditorForm = ({ initialValues, id }) => {
  const navigate = useNavigate();

  const closeModal = () => navigate('/contacts');

  const [updateContact, { isLoading }] = useUpdateContactMutation();

  const handleSubmit = async ({ name, number }, { resetForm }) => {
    try {
      const contact = {
        name: name.trim(),
        number: number.trim(),
      };

      await updateContact({ id, contact });

      closeModal();

      resetForm();
    } catch (error) {
      toast.error('Error when editing contact');
      console.log(error);
    }
  };

  return (
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
        <Wrapper>
          <Button disabled={isLoading} type="button" onClick={closeModal}>
            {' '}
            {isLoading ? 'in progress...' : 'Сlose edit form'}
          </Button>
          <Button disabled={isLoading} type="submit">
            {' '}
            {isLoading ? 'in progress...' : 'Save changes'}
          </Button>
        </Wrapper>
      </FormikForm>
    </Formik>
  );
};

export default ContactEditorForm;

ContactEditorForm.propTypes = {
  id: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
