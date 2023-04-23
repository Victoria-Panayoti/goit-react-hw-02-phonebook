import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
    width: 400px;
    padding: 8px;
    border: 1px solid #5959a4;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
export const FormField = styled.label`
    display: flex;
    flex-direction: column;
`;
export const ErrorMessage = styled(FormikErrorMessage)`
    font-size: 12px;
    color: red;
`;