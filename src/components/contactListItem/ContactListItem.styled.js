import styled from 'styled-components';

export const ListItem = styled.li`
  width: 650px;
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemText = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
