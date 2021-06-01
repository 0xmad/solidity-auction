import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from '..';

export default {
  title: 'UI/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Text {...args}>Colored text</Text>
);

export const DefaultText = Template.bind({});

DefaultText.args = {
  bg: 'red',
  color: 'white',
  fontSize: 5,
};
