import theme from '../styles/theme';
import GlobalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
