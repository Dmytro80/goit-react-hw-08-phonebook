import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  min-width: 70px;
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 250ms linear;
  &:hover,
  &:focus {
    background: #188ce8;
  }
  &:disabled {
    background: #bcdcf6;
  }
`;
