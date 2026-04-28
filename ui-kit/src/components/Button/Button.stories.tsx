import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: [40, 48, 56] },
    color: { control: 'inline-radio', options: ['primary', 'second', 'transparent', 'brand', 'ghost'] },
    loading: { control: 'boolean' },
    block: { control: 'boolean' },
  },
  args: { children: 'Выполнить', size: 48, color: 'primary' },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { color: 'primary' } };
export const Second: Story   = { args: { color: 'second' } };
export const Transparent: Story = { args: { color: 'transparent' } };
export const Brand: Story    = { args: { color: 'brand' } };
export const Ghost: Story    = { args: { color: 'ghost' } };

export const WithIconLeft: Story  = { args: { iconLeft: 'add', children: 'Добавить' } };
export const WithIconRight: Story = { args: { iconRight: 'arrow-forward', children: 'Дальше' } };
export const IconOnly: Story      = { args: { iconOnly: 'add', children: undefined } };
export const Loading: Story       = { args: { loading: true } };
export const Disabled: Story      = { args: { disabled: true } };

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button {...args} size={40}>40px</Button>
      <Button {...args} size={48}>48px</Button>
      <Button {...args} size={56}>56px</Button>
    </div>
  ),
};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {([40, 48, 56] as const).map(size => (
        <div key={size} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {(['primary', 'second', 'transparent', 'brand', 'ghost'] as const).map(color => (
            <Button key={color} size={size} color={color}>{color}</Button>
          ))}
          <Button size={size} color="primary" iconLeft="add">с иконкой</Button>
          <Button size={size} color="second" iconOnly="add" />
          <Button size={size} color="primary" loading>loading</Button>
        </div>
      ))}
    </div>
  ),
};
