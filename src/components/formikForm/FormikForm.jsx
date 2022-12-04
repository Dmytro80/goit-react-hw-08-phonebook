import PropTypes from 'prop-types';
import { SubmitForm } from './FormikForm.styled';

const FormikForm = ({ children }) => {
  return <SubmitForm>{children}</SubmitForm>;
};

export default FormikForm;

FormikForm.propTypes = {
  children: PropTypes.node.isRequired,
};
