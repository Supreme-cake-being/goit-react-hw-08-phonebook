import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { Button, Form, Input, Label } from './SignupForm.styled';
import { nanoid } from 'nanoid';
import { useAuth } from 'hooks/useAuth';

export const SignupForm = () => {
  const usernameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const dispatch = useDispatch();
  const { signUpError } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={usernameId}>Username</Label>
      <Input type="text" name="name" id={usernameId} />

      <Label htmlFor={emailId}>Email</Label>
      <Input type="email" name="email" id={emailId} />

      <Label htmlFor={passwordId}>Password</Label>
      <Input type="password" name="password" id={passwordId} />

      {signUpError && (
        <p style={{ color: `red`, textAlign: `center` }}>{signUpError}</p>
      )}
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
