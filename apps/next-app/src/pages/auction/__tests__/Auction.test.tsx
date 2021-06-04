import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Auction from '..';

describe('auction/create', () => {
  test('should render properly', async () => {
    render(<Auction />);
    const page = await screen.findByTestId('create-auction-page');
    expect(page).toBeInTheDocument();
  });

  test('should fill and submit form', async () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(() => true);
    render(<Auction />);

    const nameInput = await screen.findByLabelText('Item name');
    const descriptionInput = await screen.findByLabelText('Item description');
    const priceInput = await screen.findByLabelText('Item start price');

    userEvent.type(nameInput, 'name');
    userEvent.type(descriptionInput, 'description');
    userEvent.type(priceInput, '2');

    const submitButton = await screen.findByText('Submit');
    submitButton.click();
    expect(spyLog).toBeCalledTimes(1);
  });
});
