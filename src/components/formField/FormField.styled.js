import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormLabel = styled.label`
  font-weight: 700;
  color: #757575;
`;

export const FormInput = styled(Field)`
  width: 300px;
  padding: 3px;
  display: flex;
  flex-direction: column;
`;

export const FormError = styled(ErrorMessage)`
  max-width: 350px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #d8000c;
`;
