import { StyledContainer } from './Container.styled.js';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
