import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormField from 'components/formField/FormField';
import FormFieldWrapper from '../formFieldWrapper';
import FormikForm from '../formikForm';
import FormButton from '../formButton';

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    const contact = {
      email: email.trim(),
      password: password.trim(),
    };

    dispatch(logIn(contact));

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
          <FormField name="email" type="email" title="Email" />
          <FormField name="password" type="password" title="Password" />
        </FormFieldWrapper>
        <FormButton>Log In</FormButton>
      </FormikForm>
    </Formik>
  );
};

export default LoginForm;
