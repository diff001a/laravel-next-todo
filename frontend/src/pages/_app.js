import GlobalStyle from '@/components/Style/Global';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/Style/theme';

const App = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
