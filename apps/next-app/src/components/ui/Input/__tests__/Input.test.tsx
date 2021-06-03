import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '..';

describe('components/UI/Input', () => {
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const onFocus = jest.fn();

  const props = {
    id: 'id',
    name: 'name',
    label: 'Label',
    value: '',
    onChange,
    onBlur,
    onFocus,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render Input properly', () => {
    render(<Input {...props} />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('should render Input with theme properly', () => {
    render(<Input type="textarea" theme={{ input: { mb: 2 } }} {...props} />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('should render Textarea properly', () => {
    render(<Input type="textarea" {...props} />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('should render Textarea with empty theme properly', () => {
    render(<Input type="textarea" theme={{}} {...props} />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('should enter text', () => {
    render(<Input {...props} />);

    const input = screen.getByTestId(props.id);
    input.focus();
    userEvent.type(input, 'value');
    input.blur();

    expect(onChange).toBeCalled();
    expect(onBlur).toBeCalledTimes(1);
    expect(onFocus).toBeCalledTimes(1);
  });
});
