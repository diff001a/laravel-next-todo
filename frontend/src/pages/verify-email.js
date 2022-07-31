import GuestLayout from '@/components/Layouts/GuestLayout';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';
import { Button } from '@mui/material';
import Wrapper from '@/components/Style/form';

const VerifyEmail = () => {
  const { logout, resendEmailVerification } = useAuth({
    middleware: 'auth',
  });

  const [status, setStatus] = useState(null);

  return (
    <GuestLayout>
      <Wrapper>
        <div className="mt-20 mb-20">
          Thanks for signing up! Before getting started, could you verify your
          email address by clicking on the link we just emailed to you? If you
          didn't receive the email, we will gladly send you another.
        </div>

        {status === 'verification-link-sent' && (
          <div>
            A new verification link has been sent to the email address you
            provided during registration.
          </div>
        )}

        <div>
          <Button onClick={() => resendEmailVerification({ setStatus })}>
            Resend Verification Email
          </Button>

          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      </Wrapper>
    </GuestLayout>
  );
};

export default VerifyEmail;
