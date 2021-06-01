import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '../components/ui/theme';

function MyApp({ Component, pageProps }: AppProps): ReactElement<AppProps> {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
