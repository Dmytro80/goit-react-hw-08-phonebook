import PropTypes from 'prop-types';
import { SecondaryTitleStyled } from './SecondaryTitle.styled';

const SecondaryTitle = ({ style, children }) => {
  return <SecondaryTitleStyled style={style}>{children}</SecondaryTitleStyled>;
};

export default SecondaryTitle;

SecondaryTitle.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
