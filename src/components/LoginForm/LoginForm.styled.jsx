import styled from '@emotion/styled';

const Form = styled.form`
  max-width: 400px;
  margin-top: 28px;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Label = styled.label`
  font-size: 20px;
  line-height: 24px;
`;

const Input = styled.input`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;

  font-size: 16px;
  line-height: 20px;

  outline: none;
  border-radius: 16px;
  border: 1px solid black;
`;

const Button = styled.button`
  max-width: 200px;

  margin: 0 auto;
  padding: 16px 32px;

  color: black;
  background-color: transparent;
  border-radius: 16px;
  border: 1px solid black;

  transition: color 250ms ease-out, background-color 250ms ease-out;

  &:hover,
  &:focus {
    color: white;
    background-color: black;
  }
`;

export { Form, Label, Input, Button };
