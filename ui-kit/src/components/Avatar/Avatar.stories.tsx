import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: { name: 'Анна Иванова' },
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {};
export const WithImage: Story = { args: { src: 'https://i.pravatar.cc/120?img=12' } };
export const Statuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Avatar name="Анна" status="online" />
      <Avatar name="Петр" status="busy" />
      <Avatar name="Лиза" status="offline" />
    </div>
  ),
};
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {([32, 40, 48, 64, 80] as const).map(s => <Avatar key={s} size={s} name="Иван Петров" />)}
    </div>
  ),
};
