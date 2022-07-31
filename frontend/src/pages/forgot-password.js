import AuthSessionStatus from '@/components/AuthSessionStatus';
import AuthValidationErrors from '@/components/AuthValidationErrors';
import GuestLayout from '@/components/Layouts/GuestLayout';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Form from '@/components/Form';
import FormWrapper, { MessageWrapper } from '@/components/Style/form';

const ForgotPassword = () => {
  const { forgotPassword } = useAuth({ middleware: 'guest' });

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = event => {
    event.preventDefault();
    forgotPassword({ email, setErrors, setStatus });
  };

  return (
    <GuestLayout>
      <MessageWrapper>
        <p className="paragraph">
          Forgot your password? No problem. <br />
          Just let us know your email address and we will email you a password
          reset link that will allow you to choose a new one.
        </p>
        <AuthSessionStatus status={status} />
        <AuthValidationErrors errors={errors} />
      </MessageWrapper>
      <FormWrapper>
        <Form onSubmit={submitForm} className="flex column gap-10 mt-10 form">
          <div width="100%">
            <TextField
              id="email"
              type="email"
              name="email"
              label="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
              autoFocus
              size="small"
              fullWidth
            />
          </div>
          <div>
            <Button type="submit" fullWidth>
              Email Password Reset Link
            </Button>
          </div>
        </Form>
      </FormWrapper>
    </GuestLayout>
  );
};

export default ForgotPassword;
