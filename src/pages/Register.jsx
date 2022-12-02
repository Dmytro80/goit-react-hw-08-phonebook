import { Helmet } from 'react-helmet';
import RegisterForm from 'components/registerForm/RegisterForm';

export const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};
