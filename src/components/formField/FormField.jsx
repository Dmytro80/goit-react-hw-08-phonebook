import PropTypes from 'prop-types';
import { FormLabel, FormInput, FormError } from './FormField.styled';

const FormField = ({ name, type, title }) => {
  return (
    <FormLabel htmlFor={name}>
      {title}:
      <FormInput type={type} name={name} />
      <FormError name={name} component="p" />
    </FormLabel>
  );
};

export default FormField;

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
