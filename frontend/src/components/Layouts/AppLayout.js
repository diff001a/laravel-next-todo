import Navigation from '@/components/Layouts/Navigation';
import { useAuth } from '@/hooks/auth';
import Wrapper from './LayoutStyle';
import GlobalStyle from '@/components/Style/Global';
import Loading from '../Loading';

const AppLayout = ({ loading = false, children }) => {
  const { user } = useAuth({ middleware: 'auth' });
  return (
    <Wrapper>
      <Navigation user={user} />
      <main>{children}</main>
      <Loading loading={loading} />
      <GlobalStyle />
    </Wrapper>
  );
};

export default AppLayout;
