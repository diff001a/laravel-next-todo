import Wrapper from './style';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import { useRouter } from 'next/router';
import Form from '../../Form';
import { Button } from '@mui/material';

const Navigation = ({ user }) => {
  const router = useRouter();
  const { logout } = useAuth();
  if (user) {
    return (
      <Wrapper>
        <h1>Hello, {user?.name} !!</h1>
        <Form onSubmit={logout}>
          <Button type="submit" variant="text">
            Logout
          </Button>
        </Form>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="links">
          <Link href="/login" active={router.pathname === '/login'}>
            Login
          </Link>
          <Link href="/register" active={router.pathname === '/register'}>
            Register
          </Link>
        </div>
      </Wrapper>
    );
  }
};

export default Navigation;
