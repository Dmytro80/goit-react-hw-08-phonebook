import { Helmet } from 'react-helmet';
import LoginForm from 'components/loginForm/LoginForm';
import PageWrapper from '../components/pageWrapper';

const Login = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </PageWrapper>
  );
};

export default Login;
