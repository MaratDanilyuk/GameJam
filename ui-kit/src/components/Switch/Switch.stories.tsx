import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['md', 'lg'] },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Уведомления', size: 'md' },
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Large: Story = { args: { size: 'lg' } };

export const Checked: Story = { args: { defaultChecked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } };

export const WithoutLabel: Story = { args: { label: undefined } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Switch label="Обычный" size="md" />
      <Switch label="Большой" size="lg" />
      <Switch label="Включен" size="md" defaultChecked />
      <Switch label="Отключён" size="md" disabled />
      <Switch label="Отключён и включен" size="md" disabled defaultChecked />
    </div>
  ),
};
