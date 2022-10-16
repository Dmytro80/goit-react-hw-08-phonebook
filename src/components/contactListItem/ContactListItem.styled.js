import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  font-size: 18px;
  font-weight: 700;
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const ListItemButton = styled.button`
  padding-top: 4px;
  padding-bottom: 4px;
  width: 70px;
  font-family: inherit;
  font-weight: 400;
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
`;
