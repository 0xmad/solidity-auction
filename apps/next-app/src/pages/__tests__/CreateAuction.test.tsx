import { render, screen } from '@testing-library/react';

import CreateAuction from '../auction';

describe('Create auction', () => {
  test('should render properly', async () => {
    render(<CreateAuction />);
    const auctionPage = await screen.findByTestId('create-auction-page');
    expect(auctionPage).toBeInTheDocument();
  });
});
