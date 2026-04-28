import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage';
import { Button } from '../Button/Button';

const meta: Meta<typeof ErrorPage> = {
  title: 'Components/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const NotFound: Story = {
  args: {
    code: '404',
    title: 'Страница не найдена',
    description: 'Возможно, она была удалена или вы перешли по неверной ссылке.',
    actions: <Button size={48} color="primary">На главную</Button>,
  },
};

export const ServerError: Story = {
  args: {
    code: '500',
    title: 'Внутренняя ошибка сервера',
    description: 'Попробуйте обновить страницу или вернуться позже.',
    actions: <Button size={48} color="second">Обновить</Button>,
  },
};

export const Forbidden: Story = {
  args: {
    code: '403',
    title: 'Доступ запрещён',
    description: 'У вас нет прав для просмотра этой страницы.',
  },
};
