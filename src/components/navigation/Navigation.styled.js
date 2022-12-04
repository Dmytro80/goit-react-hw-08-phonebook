import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigateLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #757575;

  &.active {
    color: #2196f3;
  }
  :hover,
  :focus {
    text-decoration: underline;
  }
`;
