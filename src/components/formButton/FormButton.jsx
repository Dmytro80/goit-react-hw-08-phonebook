import { SubmitButton } from './FormButton.styled';
import PropTypes from 'prop-types';

const FormButton = ({ isLoading = false, children }) => {
  return (
    <SubmitButton type="submit" disabled={isLoading}>
      {children}
    </SubmitButton>
  );
};

export default FormButton;

FormButton.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};
