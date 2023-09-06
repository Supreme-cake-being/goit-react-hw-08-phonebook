import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './LoginForm.styled';
import { useAuth } from 'hooks/useAuth';

export const LoginForm = () => {
  const emailId = nanoid();
  const passwordId = nanoid();

  const dispatch = useDispatch();
  const { logInError } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={emailId}>Email</Label>
      <Input type="email" name="email" id={emailId} />

      <Label htmlFor={passwordId}>Password</Label>
      <Input type="password" name="password" id={passwordId} />

      {logInError && (
        <p style={{ color: `red`, textAlign: `center` }}>{logInError}</p>
      )}
      <Button type="submit">Login</Button>
    </Form>
  );
};
