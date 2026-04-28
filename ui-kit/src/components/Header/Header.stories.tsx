import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Avatar } from '../Avatar/Avatar';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    brand: <span style={{ fontWeight: 700, fontSize: 20 }}>Учи.ру</span>,
    nav: [
      { id: 'main', label: 'Главная' },
      { id: 'tasks', label: 'Задания' },
      { id: 'progress', label: 'Прогресс' },
    ],
    active: 'main',
    right: <Avatar size={32} name="User" />,
  },
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const WithoutNav: Story = {
  args: { nav: undefined, active: undefined },
};

export const ActiveTasks: Story = {
  args: { active: 'tasks' },
};
