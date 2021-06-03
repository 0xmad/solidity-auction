import { Story, Meta } from '@storybook/react';

import Button, { Props } from '..';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  children: 'Click me',
};
