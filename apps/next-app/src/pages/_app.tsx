import { ReactElement } from 'react';
import { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement<AppProps> {
  return <Component {...pageProps} />;
}

export default MyApp;
