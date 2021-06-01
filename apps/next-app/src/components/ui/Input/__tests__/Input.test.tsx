import { render, screen } from '@testing-library/react';

import Input from '..';

describe('components/UI/Input', () => {
  test('should render Input properly', () => {
    render(<Input id="id" name="name" label="Label" />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('should render Input with theme properly', () => {
    render(
      <Input
        id="id"
        name="name"
        label="Label"
        type="textarea"
        theme={{ input: { mb: 2 } }}
      />,
    );
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('should render Textarea properly', () => {
    render(<Input id="id" name="name" label="Label" type="textarea" />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('should render Textarea with empty theme properly', () => {
    render(
      <Input id="id" name="name" label="Label" type="textarea" theme={{}} />,
    );
    expect(screen.getByText('Label')).toBeInTheDocument();
  });
});
