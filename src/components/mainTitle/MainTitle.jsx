import { MainTitleStyled } from './MainTitle.styled.js';
import PropTypes from 'prop-types';

const MainTitle = ({ style, children }) => {
  return <MainTitleStyled style={style}>{children}</MainTitleStyled>;
};

export default MainTitle;

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
