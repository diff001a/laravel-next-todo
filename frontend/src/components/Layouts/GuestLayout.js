import Head from 'next/head';
import Navigation from './Navigation';
import Meta from './Meta';
import Wrapper from './LayoutStyle';
import GlobalStyle from '@/components/Style/Global';

const GuestLayout = ({ children }) => {
  return (
    <Wrapper>
      <Meta />
      <Navigation />
      <main>{children}</main>
      <GlobalStyle />
    </Wrapper>
  );
};

export default GuestLayout;
