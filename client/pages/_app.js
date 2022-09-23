import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

import { ThemeProvider } from 'styled-components';
import { Menu } from '../components/Menu';

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
