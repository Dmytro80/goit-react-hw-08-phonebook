import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
`;

export const SubmitForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  border: 2px solid rgb(96, 128, 209);
  border-radius: 4px;
  padding: 50px;
`;

export const IntupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 22px;
`;

export const NameInput = styled(Field)`
  width: 250px;
  padding: 3px;
  margin-left: 23px;
`;
export const NumberInput = styled(Field)`
  width: 250px;
  padding: 3px;
  margin-left: 6px;
`;
export const FormLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;
export const FormButton = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  min-width: 90px;
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
`;

export const Error = styled(ErrorMessage)`
  max-width: 350px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: red;
`;
