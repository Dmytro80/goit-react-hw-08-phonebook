import PropTypes from 'prop-types';
import { ErrorMessageStyled } from './ErrorMessage.styled';

const ErrorMessage = ({ children }) => {
  return <ErrorMessageStyled>{children}</ErrorMessageStyled>;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
