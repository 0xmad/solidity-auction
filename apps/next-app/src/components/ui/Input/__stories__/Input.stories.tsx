import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input, { Props } from '..';

export default {
  title: 'UI/Input',
  component: Input,
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  id: 'name',
  name: 'name',
  label: 'Item name',
  placeholder: 'Enter item name',
};

export const DefaultTextarea = Template.bind({});

DefaultTextarea.args = {
  id: 'name',
  name: 'name',
  label: 'Item name',
  type: 'textarea',
  placeholder: 'Enter item name',
};
