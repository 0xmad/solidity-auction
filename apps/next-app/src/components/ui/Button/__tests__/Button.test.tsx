import { render, screen } from '@testing-library/react';

import Button from '..';

describe('components/ui/Button', () => {
  test('should render properly', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByText('Click me');
    button.click();
    expect(button).toBeInTheDocument();
    expect(onClick).toBeCalledTimes(1);
  });
});
