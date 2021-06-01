import { render } from '@testing-library/react';

import { Box, Flex, Text } from '..';

describe('components/UI/Primitives', () => {
  test('should render Box properly', () => {
    render(<Box />);
  });

  test('should render Flex properly', () => {
    render(<Flex />);
  });

  test('should render Text properly', () => {
    render(<Text />);
  });
});
