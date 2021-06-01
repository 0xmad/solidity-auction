import { Story, Meta } from '@storybook/react';

import { Box, BoxProps } from '..';

export default {
  title: 'UI/Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args}>Box</Box>;

export const DefaultBox = Template.bind({});

DefaultBox.args = {
  border: '1px solid black',
  height: 100,
  width: 100,
};
