import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ type, children, ...otherProps }) => {
  return (
    <ButtonStyled type={type} {...otherProps}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
