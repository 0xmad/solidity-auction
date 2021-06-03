import { Story, Meta } from '@storybook/react';

import { Box, BoxProps } from '..';

export default {
  title: 'UI/Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Box {...args}>Box</Box>
);

export const DefaultBox = Template.bind({});

DefaultBox.args = {
  border: '1px solid black',
  height: 100,
  width: 100,
};
