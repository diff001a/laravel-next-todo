import AuthSessionStatus from '@/components/AuthSessionStatus';
import AuthValidationErrors from '@/components/AuthValidationErrors';
import GuestLayout from '@/components/Layouts/GuestLayout';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FormControlLabel, Checkbox, TextField, Button } from '@mui/material';
import Form from '@/components/Form';
import FormWrapper from '@/components/Style/form';

const Login = () => {
  const router = useRouter();

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [check, setCheck] = useState(false);

  const label = {
    inputProps: { id: 'remember_me', name: 'remember' },
    style: {
      width: '38px',
      height: '38px',
    },
  };

  useEffect(() => {
    if (router.query.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.query.reset));
    } else {
      setStatus(null);
    }
  });

  const submitForm = async event => {
    await login({ email, password, remember: check, setErrors, setStatus });
    return true;
  };

  return (
    <GuestLayout>
      <AuthSessionStatus status={status} />
      <AuthValidationErrors errors={errors} />
      <FormWrapper>
        <Form onSubmit={submitForm} className="flex column">
          <TextField
            id="email"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            label="email"
            required
            className="mb-10"
            autoFocus
          />
          <TextField
            id="password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            label="passworld"
            required
            className="mb-10"
            autoComplete="current-password"
          />
          <div className="flex center mb-10">
            <FormControlLabel
              control={<Checkbox {...label} />}
              label="Remember me"
              onChange={e => setCheck(!e.target.check)}
              check={check.toString()}
            />
          </div>
          <div className="mb-20">
            <Link href="/forgot-password">
              <a>Forgot your password?</a>
            </Link>
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </FormWrapper>
    </GuestLayout>
  );
};

export default Login;
