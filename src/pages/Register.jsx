import { Helmet } from 'react-helmet';
import RegisterForm from 'components/registerForm/RegisterForm';
import PageWrapper from '../components/pageWrapper';

const Register = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </PageWrapper>
  );
};

export default Register;
