import { AppProps } from 'next/app';
import { render, screen } from '@testing-library/react';

import App from '../_app';

describe('App', () => {
  test('should render app properly', () => {
    const props = {
      Component: () => <div data-testid="app" />,
      pageProps: {},
    } as unknown as AppProps;
    render(<App {...props} />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });
});
