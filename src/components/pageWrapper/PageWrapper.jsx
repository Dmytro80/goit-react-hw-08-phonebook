import { Wrapper } from './PageWrapper.styled';
import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
