import PropTypes from 'prop-types';
import { IntupWrapper } from './FormFieldWrapper.styled';

const FormFieldWrapper = ({ children }) => {
  return <IntupWrapper>{children}</IntupWrapper>;
};

export default FormFieldWrapper;

FormFieldWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
