import { Story, Meta } from '@storybook/react';

import Input, { Props } from '..';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'onChange' },
    onBlur: { action: 'onBlur' },
    onFocus: { action: 'onFocus' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  id: 'name',
  name: 'name',
  label: 'Item name',
  placeholder: 'Enter item name',
};

export const InputWithError = Template.bind({});

InputWithError.args = {
  id: 'name',
  name: 'name',
  label: 'Item name',
  placeholder: 'Enter item name',
  meta: { error: 'Error', touched: true },
};

export const DefaultTextarea = Template.bind({});

DefaultTextarea.args = {
  id: 'name',
  name: 'name',
  label: 'Item name',
  type: 'textarea',
  placeholder: 'Enter item name',
};
