import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';
import { Button } from '../Button/Button';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  args: {
    title: 'Настройки профиля',
  },
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};

export const WithBreadcrumbs: Story = {
  args: {
    breadcrumbs: ['Главная', 'Профиль', 'Настройки'],
  },
};

export const WithBackButton: Story = {
  args: {
    onBack: () => alert('Назад'),
  },
};

export const WithActions: Story = {
  args: {
    breadcrumbs: ['Главная', 'Курсы'],
    actions: <Button size={40} color="primary">Добавить</Button>,
  },
};

export const Full: Story = {
  args: {
    title: 'Управление курсами',
    breadcrumbs: ['Главная', 'Обучение', 'Курсы'],
    onBack: () => alert('Назад'),
    actions: (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button size={40} color="second">Фильтр</Button>
        <Button size={40} color="primary">Создать</Button>
      </div>
    ),
  },
};
