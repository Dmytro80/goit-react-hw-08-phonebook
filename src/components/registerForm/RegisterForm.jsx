import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormField from 'components/formField/FormField';
import FormFieldWrapper from '../formFieldWrapper';
import FormikForm from '../formikForm';
import Button from 'components/button/Button';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/auth/selectors';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(9, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .trim()
    .min(7, 'Too Short!')
    .required('Password is required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const error = useSelector(selectError);

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      register({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      })
    );

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormikForm>
        <FormFieldWrapper>
          <FormField name="name" type="text" title="Username" />
          <FormField name="email" type="email" title="Email" />
          <FormField name="password" type="password" title="Password" />
        </FormFieldWrapper>
        <Button disabled={isLoading} type="submit">
          {' '}
          {isLoading ? 'In progress...' : 'Register'}
        </Button>

        {error && !isLoading && (
          <ErrorMessage>Incorrect entry! Try again...</ErrorMessage>
        )}
      </FormikForm>
    </Formik>
  );
};

export default RegisterForm;
