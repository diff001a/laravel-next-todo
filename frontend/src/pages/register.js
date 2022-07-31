import AuthValidationErrors from '@/components/AuthValidationErrors';
import GuestLayout from '@/components/Layouts/GuestLayout';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';
import Form from '@/components/Form';
import FormWrapper from '@/components/Style/form';
import { TextField, Button } from '@mui/material';

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);

  const submitForm = event => {
    event.preventDefault();
    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
  };

  return (
    <GuestLayout>
      <AuthValidationErrors errors={errors} />
      <FormWrapper>
        <Form onSubmit={submitForm} className="flex column form">
          <TextField
            id="name"
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            autoFocus
            label="name"
            required
            className="mb-10"
          />
          <TextField
            id="email"
            type="email"
            label="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
            className="mb-10"
          />
          <TextField
            id="password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
            autoComplete="new-password"
            label="password"
            className="mb-10"
          />
          <TextField
            id="passwordConfirmation"
            type="password"
            value={passwordConfirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
            required
            label="password confirm"
          />
          <div className="mt-20 mb-20">
            <Link href="/login">
              <a>Already registered?</a>
            </Link>
          </div>
          <Button type="submit">Register</Button>
        </Form>
      </FormWrapper>
    </GuestLayout>
  );
};

export default Register;
