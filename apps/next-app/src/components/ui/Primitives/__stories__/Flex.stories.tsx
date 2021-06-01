import { Story, Meta } from '@storybook/react';

import { Flex, FlexProps } from '..';

export default {
  title: 'UI/Flex',
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = (args) => <Flex {...args}>Flex</Flex>;

export const DefaultFlex = Template.bind({});

DefaultFlex.args = {
  border: '1px solid black',
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  width: 100,
};
