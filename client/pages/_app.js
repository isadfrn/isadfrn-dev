import theme from '../styles/theme';
import GlobalStyles from '../styles/global';
import { Menu } from '../components/Menu';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Menu />
      </ThemeProvider>
    </>
  );
}

export default App;
