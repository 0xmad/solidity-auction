import { render, screen } from '@testing-library/react';

import HomePage from '..';

describe('', () => {
  test('should render properly', async () => {
    render(<HomePage />);
    const homePage = await screen.findByTestId('home-page');
    expect(homePage).toBeInTheDocument();
  });
});
