import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: {
    items: [
      { id: 'home', label: 'Главная', icon: 'home' },
      { id: 'search', label: 'Поиск', icon: 'search' },
      { id: 'messages', label: 'Сообщения', icon: 'message', count: 3 },
      { id: 'bell', label: 'Уведомления', icon: 'bell', count: 12 },
      { id: 'settings', label: 'Настройки', icon: 'menu', section: 'Прочее' },
      { id: 'help', label: 'Помощь', icon: 'help', section: 'Прочее' },
    ],
    value: 'home',
  },
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};

export const WithSections: Story = {
  args: { value: 'messages' },
};

export const Minimal: Story = {
  args: {
    items: [
      { id: 'home', label: 'Главная', icon: 'home' },
      { id: 'user', label: 'Профиль', icon: 'user' },
    ],
    value: 'home',
  },
};
